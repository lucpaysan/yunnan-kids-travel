// ============================================================
// 花生的云南探险日记 - 应用逻辑
// ============================================================

// === 全局状态 ===
let currentDay = null;
let appData = {
    totalStars: 0,
    completedTasks: {},  // { "task-id": { completed: true, stars: 3, photo: "data-url", text: "..." } }
    diaries: {},         // { dayNum: "diary text" }
    dayStars: {}         // { dayNum: starCount }
};

// === 本地存储 ===
const STORAGE_KEY = 'yunnan_trip_data';
const DATA_VERSION = 'v2'; // 数据版本号，数据结构变更时升级

function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // 版本检查：旧数据直接清除，防止脏数据导致 undefined
            if (parsed.dataVersion !== DATA_VERSION) {
                console.warn('检测到旧版本数据，已重置');
                localStorage.removeItem(STORAGE_KEY);
            } else {
                // 合并数据，确保所有字段都存在
                appData = {
                    dataVersion: DATA_VERSION,
                    totalStars: parsed.totalStars || 0,
                    completedTasks: parsed.completedTasks || {},
                    diaries: parsed.diaries || {},
                    dayStars: parsed.dayStars || {}
                };
            }
        }
    } catch (e) {
        console.warn('加载数据失败，已重置', e);
        localStorage.removeItem(STORAGE_KEY);
    }
}

function saveData() {
    try {
        appData.dataVersion = DATA_VERSION;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
        console.warn('保存数据失败', e);
        showToast('保存失败！可能是存储空间不足');
    }
}

function saveData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
        console.warn('保存数据失败', e);
        showToast('保存失败！可能是存储空间不足');
    }
}

// === 页面切换 ===
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

// === 渲染主页 ===
function renderHome() {
    // 安全检查：确保 TRIP_DATA 和 appData 存在
    if (typeof TRIP_DATA === 'undefined') {
        document.body.innerHTML = '<div style="padding:40px;text-align:center;font-family:sans-serif;"><h2>⚠️ 数据加载失败</h2><p>请刷新页面，或检查 js/tasks.js 文件是否存在。</p></div>';
        return;
    }
    if (!appData) appData = { totalStars: 0, completedTasks: {}, diaries: {}, dayStars: {} };

    // 更新星星总数
    const totalStarsEl = document.getElementById('totalStars');
    if (totalStarsEl) totalStarsEl.textContent = appData.totalStars || 0;

    // 更新进度条
    const maxStars = 200;
    const progress = Math.min(((appData.totalStars || 0) / maxStars) * 100, 100);
    const fillEl = document.getElementById('progressFill');
    if (fillEl) fillEl.style.width = progress + '%';
    const labelEl = document.getElementById('progressLabel');
    if (labelEl) labelEl.textContent = `${appData.totalStars || 0} / ${maxStars} ⭐`;

    // 更新奖励徽章
    const rewardContainer = document.getElementById('rewardBadges');
    if (rewardContainer && TRIP_DATA.rewards) {
        rewardContainer.innerHTML = TRIP_DATA.rewards.map(r => {
            const unlocked = (appData.totalStars || 0) >= r.stars;
            return `
                <div class="reward-badge ${unlocked ? 'unlocked' : ''}">
                    <span class="reward-icon">${unlocked ? '🏆' : '🔒'}</span>
                    <strong>${r.stars}⭐</strong><br>
                    ${r.name || ''}<br>
                    <small>${r.desc || ''}</small>
                </div>
            `;
        }).join('');
    }

    // 渲染天数卡片
    const grid = document.getElementById('daysGrid');
    if (!grid || !TRIP_DATA.days) return;
    grid.innerHTML = TRIP_DATA.days.map(day => {
        const dayStars = (appData.dayStars && appData.dayStars[day.day]) || 0;
        const totalDayStars = day.tasks.reduce((sum, t) => sum + (t.stars || 0), 0);
        const isComplete = dayStars >= totalDayStars;
        const dayLabel = day.day === 0 ? '出发前' : `第${day.day}天`;
        
        return `
            <div class="day-card ${isComplete ? 'completed' : ''}" 
                 onclick="openDay(${day.day})"
                 style="border-top: 6px solid ${day.color}">
                ${isComplete ? '<div class="day-check">✓</div>' : ''}
                <div class="day-number">${dayLabel}</div>
                <div class="day-icon">${day.icon}</div>
                <div class="day-location">${day.location}</div>
                <div class="day-stars">⭐ ${dayStars}/${totalDayStars}</div>
            </div>
        `;
    }).join('');
}

// === 打开每日任务页 ===
function openDay(dayNum) {
    if (typeof TRIP_DATA === 'undefined' || !TRIP_DATA.days) {
        showToast('⚠️ 数据未加载，请刷新页面');
        return;
    }
    currentDay = TRIP_DATA.days.find(d => d.day === dayNum);
    if (!currentDay) {
        showToast('⚠️ 找不到第' + dayNum + '天的数据');
        return;
    }
    if (!currentDay.tasks) currentDay.tasks = [];

    // 更新头部
    const dayLabel = dayNum === 0 ? '出发前准备' : '第' + dayNum + '天';
    const titleEl = document.getElementById('dayTitle');
    if (titleEl) titleEl.innerHTML = `${currentDay.icon || '📍'} ${dayLabel} · ${currentDay.location || ''}`;
    const infoEl = document.getElementById('dayInfo');
    if (infoEl) infoEl.textContent = `${currentDay.date || ''} ${currentDay.weekday || ''}`;
    const typeEl = document.getElementById('dayType');
    if (typeEl) typeEl.textContent = currentDay.type || '';
    const headerEl = document.getElementById('dayHeader');
    if (headerEl) headerEl.style.borderTop = `6px solid ${currentDay.color || '#2c3e50'}`;

    // 渲染背景知识
    const bgSection = document.getElementById('backgroundSection');
    if (bgSection && currentDay.background && currentDay.background.length > 0) {
        bgSection.innerHTML = `
            <h3>📖 背景知识</h3>
            <ul>
                ${currentDay.background.map(b => `<li>${b || ''}</li>`).join('')}
            </ul>
        `;
        bgSection.classList.remove('hidden');
    } else {
        bgSection.classList.add('hidden');
    }

    // 渲染任务列表
    const taskList = document.getElementById('taskList');
    if (!taskList) return;
    
    if (currentDay.tasks.length === 0) {
        taskList.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">今天没有任务</p>';
    } else {
        taskList.innerHTML = currentDay.tasks.map(task => {
            const taskData = (appData.completedTasks && appData.completedTasks[task.id]) || {};
            const isCompleted = taskData.completed || false;
            const catLabel = getCatLabel(task.cat);
            const stars = task.stars || 1;
            
            return `
                <div class="task-card ${isCompleted ? 'completed' : ''}" id="task-${task.id}">
                    <div class="task-header">
                        <div class="task-stars">${'⭐'.repeat(stars)}</div>
                        <div class="task-info">
                            <span class="task-category cat-${task.cat || 'knowledge'}">${catLabel}</span>
                            <div class="task-title">${task.title || '未命名任务'}</div>
                            <div class="task-desc">${task.desc || ''}</div>
                            ${task.hint ? `<div class="task-hint">${task.hint}</div>` : ''}
                        </div>
                    </div>
                    <div class="task-actions">
                        ${task.needPhoto ? renderPhotoUpload(task.id, taskData.photo) : ''}
                        ${task.needText ? renderTextInput(task.id, taskData.text) : ''}
                        <button class="task-complete-btn ${isCompleted ? 'done' : ''}" 
                                onclick="confirmTask('${task.id}')"
                                id="btn-${task.id}">
                            ${isCompleted ? '✅ 已完成 ⭐已获得' : '📋 请家长确认完成'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 渲染日记区域
    const diarySection = document.getElementById('diarySection');
    if (!diarySection) return;
    if (dayNum > 0) {
        const diaryText = (appData.diaries && appData.diaries[dayNum]) || '';
        diarySection.innerHTML = `
            <h3>✍️ 今日日记</h3>
            <textarea class="diary-textarea" id="diaryText" 
                      placeholder="用中文写今天的日记...&#10;不会的字可以查，但要写完整的句子。"
                      onblur="saveDiary(${dayNum})">${diaryText}</textarea>
            <button class="diary-save-btn" onclick="saveDiary(${dayNum})">💾 保存日记</button>
        `;
        diarySection.classList.remove('hidden');
    } else {
        diarySection.classList.add('hidden');
    }

    showPage('dayPage');
}

// === 任务分类标签 ===
function getCatLabel(cat) {
    const labels = {
        'knowledge': '📚 知识',
        'observe': '📷 观察',
        'calculate': '🔢 计算',
        'write': '✍️ 写作',
        'challenge': '🎯 挑战'
    };
    return labels[cat] || cat;
}

// === 渲染照片上传 ===
function renderPhotoUpload(taskId, existingPhoto) {
    if (existingPhoto) {
        return `
            <div class="task-photo-upload">
                <div class="action-label">📷 照片证据</div>
                <img src="${existingPhoto}" class="task-photo-preview" alt="任务照片">
                <input type="file" accept="image/*" 
                       onchange="handlePhotoUpload(event, '${taskId}')"
                       style="margin-top:5px;font-size:11px;">
            </div>
        `;
    }
    return `
        <div class="task-photo-upload">
            <div class="action-label">📷 上传照片</div>
            <input type="file" accept="image/*" 
                   onchange="handlePhotoUpload(event, '${taskId}')"
                   style="font-size:11px;">
        </div>
    `;
}

// === 渲染文字输入 ===
function renderTextInput(taskId, existingText) {
    return `
        <div class="task-text-area">
            <div class="action-label">✍️ 文字回答</div>
            <textarea class="task-text-input" id="text-${taskId}"
                      placeholder="在这里写下你的答案..."
                      onblur="saveTaskText('${taskId}')">${existingText || ''}</textarea>
        </div>
    `;
}

// === 处理照片上传 ===
function handlePhotoUpload(event, taskId) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        if (!appData.completedTasks[taskId]) {
            appData.completedTasks[taskId] = {};
        }
        appData.completedTasks[taskId].photo = e.target.result;
        saveData();
        showToast('📷 照片已上传！');
        
        // 重新渲染当前任务卡片
        refreshTaskCard(taskId);
    };
    reader.readAsDataURL(file);
}

// === 保存任务文字 ===
function saveTaskText(taskId) {
    const textarea = document.getElementById('text-' + taskId);
    if (!textarea) return;
    
    const text = textarea.value.trim();
    if (!appData.completedTasks[taskId]) {
        appData.completedTasks[taskId] = {};
    }
    appData.completedTasks[taskId].text = text;
    saveData();
}

// === 刷新单个任务卡片 ===
function refreshTaskCard(taskId) {
    const task = currentDay.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    const taskData = appData.completedTasks[taskId] || {};
    const isCompleted = taskData.completed || false;
    const catLabel = getCatLabel(task.cat);
    
    const card = document.getElementById('task-' + taskId);
    if (card) {
        card.className = `task-card ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="task-header">
                <div class="task-stars">${'⭐'.repeat(task.stars)}</div>
                <div class="task-info">
                    <span class="task-category cat-${task.cat}">${catLabel}</span>
                    <div class="task-title">${task.title}</div>
                    <div class="task-desc">${task.desc}</div>
                    ${task.hint ? `<div class="task-hint">${task.hint}</div>` : ''}
                </div>
            </div>
            <div class="task-actions">
                ${task.needPhoto ? renderPhotoUpload(task.id, taskData.photo) : ''}
                ${task.needText ? renderTextInput(task.id, taskData.text) : ''}
                <button class="task-complete-btn ${isCompleted ? 'done' : ''}" 
                        onclick="confirmTask('${task.id}')">
                    ${isCompleted ? '✅ 已完成 ⭐已获得' : '📋 请家长确认完成'}
                </button>
            </div>
        `;
    }
}

// === 家长确认任务完成 ===
function confirmTask(taskId) {
    const task = currentDay.tasks.find(t => t.id === taskId);
    if (!task) return;

    const taskData = appData.completedTasks[taskId] || {};
    
    // 如果已经完成，则取消完成
    if (taskData.completed) {
        appData.totalStars -= task.stars;
        appData.dayStars[currentDay.day] = (appData.dayStars[currentDay.day] || 0) - task.stars;
        appData.completedTasks[taskId].completed = false;
        saveData();
        renderHome();
        refreshTaskCard(taskId);
        showToast(`❌ 已取消：${task.title}`);
        return;
    }

    // 检查是否需要照片或文字
    if (task.needPhoto && !taskData.photo) {
        showToast('⚠️ 请先上传照片！');
        return;
    }
    if (task.needText && !taskData.text) {
        showToast('⚠️ 请先写文字回答！');
        return;
    }

    // 显示家长确认弹窗
    showParentConfirm(task.title, task.stars, () => {
        // 确认完成
        if (!appData.completedTasks[taskId]) {
            appData.completedTasks[taskId] = {};
        }
        appData.completedTasks[taskId].completed = true;
        appData.totalStars += task.stars;
        appData.dayStars[currentDay.day] = (appData.dayStars[currentDay.day] || 0) + task.stars;
        saveData();

        // 星星飞出动画
        showStarAnimation(task.stars);

        // 更新界面
        refreshTaskCard(taskId);
        
        // 延迟刷新主页数据
        setTimeout(() => {
            renderHome();
        }, 500);

        showToast(`🎉 获得 ${task.stars} 颗星！`);
    });
}

// === 家长确认弹窗 ===
function showParentConfirm(taskTitle, stars, onConfirm) {
    const overlay = document.getElementById('parentConfirm');
    document.getElementById('confirmTaskTitle').textContent = taskTitle;
    document.getElementById('confirmStars').textContent = `将获得 ${stars} ⭐`;
    
    overlay.classList.add('show');

    // 绑定按钮
    document.getElementById('confirmYes').onclick = () => {
        overlay.classList.remove('show');
        onConfirm();
    };
    document.getElementById('confirmNo').onclick = () => {
        overlay.classList.remove('show');
    };
}

// === 星星飞出动画 ===
function showStarAnimation(count) {
    for (let i = 0; i < Math.min(count, 5); i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'star-pop';
            star.textContent = '⭐';
            star.style.left = (Math.random() * window.innerWidth) + 'px';
            star.style.top = (window.innerHeight / 2) + 'px';
            document.body.appendChild(star);
            setTimeout(() => star.remove(), 1000);
        }, i * 100);
    }
}

// === 保存日记 ===
function saveDiary(dayNum) {
    const textarea = document.getElementById('diaryText');
    if (!textarea) return;
    
    appData.diaries[dayNum] = textarea.value;
    saveData();
    showToast('💾 日记已保存');
}

// === 渲染纪念册 ===
function renderMemoir() {
    // 统计数据
    let totalTasks = 0;
    let completedTasksCount = 0;
    let totalPhotos = 0;
    let totalDiaries = 0;

    TRIP_DATA.days.forEach(day => {
        day.tasks.forEach(task => {
            totalTasks++;
            if (appData.completedTasks[task.id]?.completed) {
                completedTasksCount++;
            }
            if (appData.completedTasks[task.id]?.photo) {
                totalPhotos++;
            }
        });
    });

    Object.keys(appData.diaries).forEach(k => {
        if (appData.diaries[k] && appData.diaries[k].trim()) {
            totalDiaries++;
        }
    });

    // 渲染统计
    document.getElementById('memoirStats').innerHTML = `
        <div class="memoir-stat">
            <div class="stat-value">${appData.totalStars}</div>
            <div class="stat-label">总星数</div>
        </div>
        <div class="memoir-stat">
            <div class="stat-value">${completedTasksCount}/${totalTasks}</div>
            <div class="stat-label">完成任务</div>
        </div>
        <div class="memoir-stat">
            <div class="stat-value">${totalPhotos}</div>
            <div class="stat-label">照片数量</div>
        </div>
        <div class="memoir-stat">
            <div class="stat-value">${totalDiaries}</div>
            <div class="stat-label">日记天数</div>
        </div>
    `;

    // 渲染每日完成情况
    const dayList = document.getElementById('memoirDays');
    dayList.innerHTML = TRIP_DATA.days.map(day => {
        const dayStars = appData.dayStars[day.day] || 0;
        const totalDayStars = day.tasks.reduce((sum, t) => sum + t.stars, 0);
        const dayLabel = day.day === 0 ? '出发前' : `第${day.day}天`;
        
        return `
            <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px dashed #ddd;">
                <span style="font-size:20px;">${day.icon}</span>
                <span style="font-size:13px;flex:1;"><strong>${dayLabel}</strong> ${day.location}</span>
                <span style="font-size:13px;color:#f39c12;">⭐ ${dayStars}/${totalDayStars}</span>
            </div>
        `;
    }).join('');

    // 渲染照片墙
    const photoWall = document.getElementById('memoirPhotos');
    let photoHTML = '';
    let photoCount = 0;
    TRIP_DATA.days.forEach(day => {
        day.tasks.forEach(task => {
            const td = appData.completedTasks[task.id];
            if (td && td.photo) {
                photoHTML += `
                    <div class="photo-wall-item">
                        <img src="${td.photo}" alt="${task.title}" title="${day.location} - ${task.title}">
                    </div>
                `;
                photoCount++;
            }
        });
    });
    if (photoCount === 0) {
        photoWall.innerHTML = '<div class="photo-wall-empty">还没有上传照片，快去完成任务吧！</div>';
    } else {
        photoWall.innerHTML = photoHTML;
    }

    // 渲染日记汇总
    const diaryList = document.getElementById('memoirDiaries');
    let diaryHTML = '';
    TRIP_DATA.days.forEach(day => {
        const diary = appData.diaries[day.day];
        if (diary && diary.trim()) {
            const dayLabel = day.day === 0 ? '出发前' : `第${day.day}天`;
            diaryHTML += `
                <div style="margin-bottom:12px;padding:10px;background:rgba(0,0,0,0.03);border-left:4px solid ${day.color};">
                    <div style="font-size:12px;font-weight:bold;margin-bottom:4px;">${dayLabel} · ${day.location}</div>
                    <div style="font-size:13px;white-space:pre-wrap;">${escapeHtml(diary)}</div>
                </div>
            `;
        }
    });
    if (diaryHTML === '') {
        diaryList.innerHTML = '<div class="photo-wall-empty">还没有写日记，快去记录你的旅行吧！</div>';
    } else {
        diaryList.innerHTML = diaryHTML;
    }

    showPage('memoirPage');
}

// === HTML转义 ===
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// === 提示弹窗 ===
function showToast(message) {
    // 移除已有的toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// === 导出PDF ===
function exportPDF() {
    showToast('📄 正在生成PDF...');
    
    // 使用浏览器打印功能
    const printContent = document.getElementById('memoirPage').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>花生的云南探险日记 - 纪念册</title>
            <style>
                body { font-family: 'Noto Sans SC', sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
                h1, h2, h3 { color: #2c3e50; }
                .memoir-stat { display: inline-block; text-align: center; padding: 10px 20px; margin: 5px; border: 1px solid #ddd; }
                .stat-value { font-size: 24px; color: #f39c12; font-weight: bold; }
                .photo-wall-item { display: inline-block; width: 120px; height: 120px; margin: 5px; }
                .photo-wall-item img { width: 100%; height: 100%; object-fit: cover; }
                @media print {
                    body { padding: 0; }
                    .btn { display: none; }
                }
            </style>
        </head>
        <body>
            <h1 style="text-align:center;">🏔️ 花生的云南探险日记</h1>
            <p style="text-align:center;color:#666;">2026年7月13日 - 7月23日</p>
            <hr>
            ${printContent}
        </body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    }, 500);
}

// === 重置数据（危险操作）===
function resetData() {
    if (confirm('⚠️ 确定要重置所有数据吗？\n\n这将删除所有已完成的任务、照片和日记！\n\n此操作不可撤销！')) {
        if (confirm('再次确认：真的要删除所有数据吗？')) {
            appData = {
                totalStars: 0,
                completedTasks: {},
                diaries: {},
                dayStars: {}
            };
            saveData();
            renderHome();
            showToast('✅ 数据已重置');
        }
    }
}

// === 初始化 ===
document.addEventListener('DOMContentLoaded', () => {
    try {
        loadData();
        renderHome();
        showPage('homePage');
    } catch (e) {
        console.error('初始化失败:', e);
        document.body.innerHTML = '<div style="padding:40px;text-align:center;font-family:sans-serif;"><h2>⚠️ 页面初始化失败</h2><p>错误信息：' + e.message + '</p><p>请尝试：<br>1. 强制刷新页面（Cmd+Shift+R）<br>2. 清除浏览器缓存<br>3. 通过 http://localhost:8080 访问（不要直接双击文件）</p></div>';
    }
});

// 全局错误捕获，防止白屏
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});
