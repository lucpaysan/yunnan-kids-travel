// ============================================================
// 云南探险日记 - 任务数据
// ============================================================

const TRIP_DATA = {
  title: '花生的云南探险日记',
  subtitle: '云南 2026年7月',
  dateRange: '2026年7月13日 - 7月23日',
  motto: '用眼睛观察，用心感受，用文字记录',
  totalDays: 11,
  rewards: [
    { stars: 50, name: '小奖励', desc: '文具、零食' },
    { stars: 100, name: '中奖励', desc: '书籍、玩具' },
    { stars: 200, name: '大奖励', desc: '电子产品、旅行纪念品' }
  ],
  days: [
    // ============================================================
    // 出发前准备
    // ============================================================
    {
      day: 0,
      date: '7/9-7/12',
      weekday: '出发前',
      location: '出发前准备',
      type: '学习准备',
      icon: '📖',
      color: '#9B59B6',
      background: [
        '云南在中国地图的西南边陲，面积39.4万平方公里，比日本还大！',
        '云南有25个少数民族，是中国民族最多的省份。',
        '云南有4项世界遗产：丽江古城、三江并流、石林、元阳梯田。',
        '云南的地形从海拔76米到6740米，被称为「一山有四季，十里不同天」。'
      ],
      tasks: [
        { id: '0-1', cat: 'knowledge', level: 1, stars: 1, title: '地图寻宝', desc: '在地图上找到云南，标出昆明、建水、元阳、个旧、蒙自、石屏6个地方。', hint: '可以用手机地图或纸质地图', needPhoto: false, needText: false },
        { id: '0-2', cat: 'calculate', level: 1, stars: 1, title: '面积大比拼', desc: '云南面积约39.4万平方公里，你的家乡面积是多少？算算云南是家乡的几倍？', hint: '可以问爸爸妈妈家乡的面积', needPhoto: false, needText: true },
        { id: '0-3', cat: 'knowledge', level: 2, stars: 3, title: '彩云之南', desc: '查阅资料，了解云南为什么叫「彩云之南」。把答案写下来。', needPhoto: false, needText: true },
        { id: '0-4', cat: 'challenge', level: 3, stars: 5, title: '问题清单', desc: '设计一个「云南旅行问题清单」，列出10个你想在旅途中找到答案的问题。', hint: '比如：哈尼族吃什么？梯田是怎么修的？', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第1天 - 滇池
    // ============================================================
    {
      day: 1,
      date: '7/13',
      weekday: '周一',
      location: '昆明·滇池',
      type: '自然景观 - 高原湖泊',
      icon: '🌊',
      color: '#3498DB',
      background: [
        '滇池是云南最大的高原湖泊，面积约300平方公里，相当于680个天安门广场！',
        '滇池海拔约1886米，是典型的高原湖泊，又称「昆明湖」，是昆明的母亲湖。',
        '每年冬天，成千上万的红嘴鸥从西伯利亚飞到滇池过冬。',
        '滇池曾因污染严重，现在正在治理恢复中。'
      ],
      tasks: [
        { id: '1-1', cat: 'knowledge', level: 1, stars: 1, title: '滇池知多少', desc: '阅读背景知识，能说出滇池的3个特点（请家长确认）。', needPhoto: false, needText: false },
        { id: '1-2', cat: 'knowledge', level: 1, stars: 1, title: '地图定位', desc: '在地图上找到滇池的位置，标出昆明市。', needPhoto: true, needText: false },
        { id: '1-3', cat: 'observe', level: 1, stars: 1, title: '日落猎人', desc: '拍一张滇池日落的照片，描述天空颜色的变化。', hint: '观察天空从蓝到橙到红的变化', needPhoto: true, needText: true },
        { id: '1-4', cat: 'observe', level: 1, stars: 1, title: '鸟类侦探', desc: '观察并记录看到3种不同的鸟，查查它们的名字。', hint: '7月可能没有红嘴鸥，观察其他鸟类', needPhoto: true, needText: true },
        { id: '1-5', cat: 'observe', level: 2, stars: 3, title: '水质观察员', desc: '观察滇池的水质，描述水的颜色和透明度，和矿泉水对比。', needPhoto: true, needText: true },
        { id: '1-6', cat: 'calculate', level: 2, stars: 3, title: '面积计算', desc: '滇池面积约300平方公里，天安门广场约0.44平方公里。算算滇池相当于多少个天安门广场？', needPhoto: false, needText: true },
        { id: '1-7', cat: 'write', level: 2, stars: 3, title: '第一印象', desc: '写100字日记：描述你对滇池的第一印象。', needPhoto: false, needText: true },
        { id: '1-8', cat: 'challenge', level: 3, stars: 5, title: '环保宣传员', desc: '设计一个「保护滇池」的宣传标语，并写出3条理由说明为什么要保护滇池。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第2天 - 梁王山
    // ============================================================
    {
      day: 2,
      date: '7/14',
      weekday: '周二',
      location: '梁王山·小湾村',
      type: '自然景观 - 山岳',
      icon: '⛰️',
      color: '#27AE60',
      background: [
        '梁王山位于澄江市，海拔约2820米，是附近最高的山峰。',
        '云南有「一山有四季，十里不同天」的说法——海拔每升高1000米，气温下降约6°C。',
        '植被随海拔变化：山脚（农田）→ 山腰（森林）→ 山顶（草甸），这叫「植被垂直分布」。',
        '梁王山因元代梁王在此屯兵而得名。'
      ],
      tasks: [
        { id: '2-1', cat: 'knowledge', level: 1, stars: 1, title: '一山有四季', desc: '阅读背景知识，能解释「一山有四季」的意思（请家长确认）。', needPhoto: false, needText: false },
        { id: '2-2', cat: 'observe', level: 1, stars: 1, title: '山顶风光', desc: '拍一张梁王山山顶的照片，描述你看到的景色。', needPhoto: true, needText: true },
        { id: '2-3', cat: 'observe', level: 1, stars: 1, title: '植物猎人', desc: '观察登山过程中看到3种不同的植物，拍照并记录名字。', needPhoto: true, needText: true },
        { id: '2-4', cat: 'observe', level: 2, stars: 3, title: '植被地图', desc: '观察海拔变化对植被的影响，画一张植被垂直分布示意图。', hint: '从山脚到山顶分别画上不同的植物', needPhoto: true, needText: false },
        { id: '2-5', cat: 'calculate', level: 1, stars: 1, title: '步数统计', desc: '记录今天登山前后的步数，算算一共走了多少步。', needPhoto: false, needText: true },
        { id: '2-6', cat: 'calculate', level: 2, stars: 3, title: '温差计算', desc: '记录山顶和山脚的温度，计算温差。再用公式验证：海拔差÷1000×6=理论温差。', needPhoto: false, needText: true },
        { id: '2-7', cat: 'write', level: 2, stars: 3, title: '登山日记', desc: '写100字日记：描述登山的感觉和看到的景色。', needPhoto: false, needText: true },
        { id: '2-8', cat: 'challenge', level: 3, stars: 5, title: '梁王的宝藏', desc: '假如你是梁王（古代统治者），你会怎么利用这座山来防御？写一段200字的故事。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第3天 - 抚仙湖·建水
    // ============================================================
    {
      day: 3,
      date: '7/15',
      weekday: '周三',
      location: '抚仙湖·建水古城',
      type: '自然+人文 - 湖泊与古城',
      icon: '🏞️',
      color: '#16A085',
      background: [
        '抚仙湖是中国第二深的淡水湖，最深处约155米！水质极佳，能见度可达7-8米。',
        '传说抚仙湖底有一座古城遗迹，但至今尚未被科学证实，是个未解之谜。',
        '建水古城建于唐代，已有1200多年历史，有「文献名邦」之称。',
        '建水文庙是全国第二大文庙，仅次于山东曲阜孔庙。'
      ],
      tasks: [
        { id: '3-1', cat: 'knowledge', level: 1, stars: 1, title: '抚仙湖探秘', desc: '阅读背景知识，能说出抚仙湖的3个特点（请家长确认）。', needPhoto: false, needText: false },
        { id: '3-2', cat: 'knowledge', level: 1, stars: 1, title: '湖底古城', desc: '查阅资料，了解抚仙湖底古城的传说，写下你的看法。', needPhoto: false, needText: true },
        { id: '3-3', cat: 'observe', level: 1, stars: 1, title: '湖水画家', desc: '拍一张抚仙湖的照片，描述湖水的颜色。和滇池对比，哪个更清？', needPhoto: true, needText: true },
        { id: '3-4', cat: 'calculate', level: 2, stars: 3, title: '湖泊大比拼', desc: '滇池面积约300km²深度约5m；抚仙湖面积约212km²深度约155m。算算抚仙湖的蓄水量是滇池的几倍？', hint: '蓄水量≈面积×深度', needPhoto: false, needText: true },
        { id: '3-5', cat: 'knowledge', level: 1, stars: 1, title: '文庙探秘', desc: '参观建水文庙，记录3个古代科举相关的知识（如：什么是状元？什么是进士？）。', needPhoto: true, needText: true },
        { id: '3-6', cat: 'observe', level: 2, stars: 3, title: '建筑观察', desc: '观察建水古城的建筑风格，和现代建筑有什么不同？列出3个区别。', needPhoto: true, needText: true },
        { id: '3-7', cat: 'write', level: 2, stars: 3, title: '古城日记', desc: '写150字日记：描述建水古城给你的感觉。', needPhoto: false, needText: true },
        { id: '3-8', cat: 'challenge', level: 3, stars: 5, title: '文庙比较', desc: '比较建水文庙和你想象中的孔庙有什么不同，写一篇200字短文。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第4天 - 建水古城·朱家花园·燕子洞
    // ============================================================
    {
      day: 4,
      date: '7/16',
      weekday: '周四',
      location: '建水古城·朱家花园·燕子洞',
      type: '人文景观 - 园林与溶洞',
      icon: '🏠',
      color: '#E67E22',
      background: [
        '朱家花园是清代建水富商朱家的私家园林，占地约2万平方米，有「滇南大观园」之称。',
        '燕子洞是亚洲最大的溶洞之一，洞内有数百万只白腰雨燕筑巢。',
        '溶洞是喀斯特地貌的典型代表，由地下水溶蚀石灰岩形成，需要上万年！',
        '洞内有钟乳石、石笋、石柱等景观，每一百年才长1厘米。'
      ],
      tasks: [
        { id: '4-1', cat: 'knowledge', level: 1, stars: 1, title: '私家园林', desc: '参观朱家花园，了解什么是「私家园林」。和公园有什么区别？', needPhoto: false, needText: true },
        { id: '4-2', cat: 'observe', level: 1, stars: 1, title: '园林之美', desc: '拍一张朱家花园的照片，描述你最喜欢的一处景观。', needPhoto: true, needText: true },
        { id: '4-3', cat: 'observe', level: 2, stars: 3, title: '平面图绘制', desc: '观察朱家花园的建筑布局，画一张简单的平面图。', needPhoto: true, needText: false },
        { id: '4-4', cat: 'knowledge', level: 1, stars: 1, title: '喀斯特地貌', desc: '了解什么是喀斯特地貌，它是怎么形成的。', needPhoto: false, needText: true },
        { id: '4-5', cat: 'knowledge', level: 1, stars: 1, title: '钟乳石的秘密', desc: '了解钟乳石是如何形成的。它每百年长多少？', needPhoto: false, needText: true },
        { id: '4-6', cat: 'observe', level: 1, stars: 1, title: '洞穴摄影师', desc: '拍一张燕子洞内的照片，描述钟乳石的形状像什么。', needPhoto: true, needText: true },
        { id: '4-7', cat: 'write', level: 2, stars: 3, title: '洞穴日记', desc: '写150字日记：描述燕子洞给你的感觉。', needPhoto: false, needText: true },
        { id: '4-8', cat: 'challenge', level: 3, stars: 5, title: '喀斯特中国', desc: '查阅资料，了解中国还有哪些著名的喀斯特地貌景点，列出至少3个。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第5天 - 元阳梯田
    // ============================================================
    {
      day: 5,
      date: '7/17',
      weekday: '周五',
      location: '建水→元阳梯田',
      type: '自然景观 - 梯田·世界遗产',
      icon: '🌾',
      color: '#F39C12',
      background: [
        '元阳梯田是哈尼族人世代耕作的成果，已有1300多年历史！',
        '梯田从山脚一直修到山顶，层层叠叠，被称为「大地的雕塑」。',
        '哈尼族人创造了复杂的灌溉系统，「山有多高，水有多高」。',
        '2013年，元阳梯田被列入世界文化遗产名录。',
        '主要观景点：坝达（看日落）、多依树（看日出）、老虎嘴。'
      ],
      tasks: [
        { id: '5-1', cat: 'knowledge', level: 1, stars: 1, title: '梯田小课堂', desc: '阅读背景知识，能说出元阳梯田的3个特点（请家长确认）。', needPhoto: false, needText: false },
        { id: '5-2', cat: 'knowledge', level: 1, stars: 1, title: '哈尼族文化', desc: '了解哈尼族是什么民族，他们有什么特别的习俗。', needPhoto: false, needText: true },
        { id: '5-3', cat: 'observe', level: 1, stars: 1, title: '大地雕塑', desc: '拍一张元阳梯田的照片，描述梯田的形状和颜色。', hint: '不同时间、不同光线，梯田颜色不同', needPhoto: true, needText: true },
        { id: '5-4', cat: 'observe', level: 1, stars: 1, title: '灌溉系统', desc: '观察梯田的灌溉系统，水是怎么从山顶流到田里的？', needPhoto: true, needText: true },
        { id: '5-5', cat: 'observe', level: 2, stars: 3, title: '农作物识别', desc: '观察梯田里的农作物，记录3种不同的植物。', needPhoto: true, needText: true },
        { id: '5-6', cat: 'calculate', level: 2, stars: 3, title: '梯田数数', desc: '估算你眼前看到的梯田有多少层？你是怎么估算的？', needPhoto: false, needText: true },
        { id: '5-7', cat: 'write', level: 2, stars: 3, title: '震撼日记', desc: '写150字日记：描述元阳梯田给你的震撼。', needPhoto: false, needText: true },
        { id: '5-8', cat: 'challenge', level: 3, stars: 5, title: '保护方案', desc: '设计一个保护元阳梯田的方案，列出3条建议。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第6天 - 多依树日出·个旧
    // ============================================================
    {
      day: 6,
      date: '7/18',
      weekday: '周六',
      location: '多依树日出·元阳→个旧',
      type: '自然景观 - 日出·光影',
      icon: '🌅',
      color: '#E74C3C',
      background: [
        '多依树是观看元阳梯田日出的最佳地点。',
        '日出时，阳光照射在梯田水面上，形成金色的反光，美不胜收！',
        '日出颜色变化：暗蓝 → 橙红 → 金黄 → 白色，这是因为大气散射。',
        '个旧是中国的「锡都」，历史上以产锡闻名世界。'
      ],
      tasks: [
        { id: '6-1', cat: 'knowledge', level: 1, stars: 1, title: '为什么日出是红的', desc: '了解为什么日出时天空是红色的。（提示：太阳光穿过厚厚的大气层，蓝光被散射，红光穿透力强）', needPhoto: false, needText: true },
        { id: '6-2', cat: 'observe', level: 1, stars: 1, title: '日出摄影师', desc: '拍一段日出过程的照片或视频，记录最美的瞬间。', needPhoto: true, needText: false },
        { id: '6-3', cat: 'observe', level: 1, stars: 1, title: '颜色记录员', desc: '观察并记录日出时天空颜色的变化过程。', needPhoto: false, needText: true },
        { id: '6-4', cat: 'observe', level: 2, stars: 3, title: '光影魔术', desc: '观察梯田在水光反射下的颜色变化，描述这个变化过程。', needPhoto: true, needText: true },
        { id: '6-5', cat: 'write', level: 2, stars: 3, title: '日出日记', desc: '写100字日记：描述日出过程和你的感受。', needPhoto: false, needText: true },
        { id: '6-6', cat: 'knowledge', level: 1, stars: 1, title: '锡都探秘', desc: '了解个旧为什么叫「锡都」。锡是什么金属？有什么用途？', needPhoto: false, needText: true },
        { id: '6-7', cat: 'write', level: 2, stars: 3, title: '日出比较', desc: '比较多依树日出和你看过的其他日出有什么不同。', needPhoto: false, needText: true },
        { id: '6-8', cat: 'challenge', level: 3, stars: 5, title: '生态系统图', desc: '查阅资料，了解哈尼族的「森林-村寨-梯田-水系」四素同构生态系统，画一张示意图。', needPhoto: true, needText: true }
      ]
    },

    // ============================================================
    // 第7天 - 西南联大·碧色寨
    // ============================================================
    {
      day: 7,
      date: '7/19',
      weekday: '周日',
      location: '个旧·蒙自（西南联大·碧色寨）',
      type: '人文景观 - 历史遗址',
      icon: '🎓',
      color: '#8E44AD',
      background: [
        '西南联大全称「国立西南联合大学」，成立于1937年抗战时期。',
        '由北京大学、清华大学、南开大学联合组成，在昆明办学8年。',
        '培养了大量人才：杨振宁、李政道（诺贝尔奖得主）、邓稼先等。',
        '蒙自是西南联大文学院和法学院的分校所在地。',
        '碧色寨是滇越铁路上的重要车站，保留了大量法式建筑，是电影《芳华》取景地。'
      ],
      tasks: [
        { id: '7-1', cat: 'knowledge', level: 1, stars: 1, title: '联大初体验', desc: '参观西南联大纪念馆，了解什么是「西南联大」。', needPhoto: false, needText: true },
        { id: '7-2', cat: 'knowledge', level: 1, stars: 1, title: '联大名人', desc: '了解西南联大有哪些著名校友，记录3位。', needPhoto: false, needText: true },
        { id: '7-3', cat: 'observe', level: 1, stars: 1, title: '校园摄影', desc: '拍一张西南联大旧址的照片，描述建筑风格。', needPhoto: true, needText: true },
        { id: '7-4', cat: 'knowledge', level: 2, stars: 3, title: '为什么西迁', desc: '思考：为什么抗战时期要成立西南联大？大学为什么要西迁？', needPhoto: false, needText: true },
        { id: '7-5', cat: 'knowledge', level: 1, stars: 1, title: '滇越铁路', desc: '了解什么是滇越铁路，它建于什么时候？', needPhoto: false, needText: true },
        { id: '7-6', cat: 'observe', level: 1, stars: 1, title: '碧色寨印象', desc: '拍一张碧色寨车站的照片，描述法式建筑的特点。', needPhoto: true, needText: true },
        { id: '7-7', cat: 'write', level: 2, stars: 3, title: '联大日记', desc: '写150字日记：描述参观西南联大的感受。', needPhoto: false, needText: true },
        { id: '7-8', cat: 'challenge', level: 3, stars: 5, title: '假如我是联大学生', desc: '假如你是西南联大的学生，你会选择学什么专业？为什么？写一段200字的文字。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第8天 - 石屏古城
    // ============================================================
    {
      day: 8,
      date: '7/20',
      weekday: '周一',
      location: '个旧→石屏古城·石屏中学',
      type: '人文景观 - 古城·状元文化',
      icon: '📚',
      color: '#2980B9',
      background: [
        '石屏古城建于明代，已有600多年历史。',
        '石屏是云南出状元最多的地方——清代云南唯一状元袁嘉谷就是石屏人！',
        '石屏文庙是云南保存最完整的文庙之一。',
        '石屏中学前身是清代「石屏书院」，是云南百年名校。',
        '石屏还有著名的豆腐——用井水点豆腐，是国家级非遗。'
      ],
      tasks: [
        { id: '8-1', cat: 'knowledge', level: 1, stars: 1, title: '什么是状元', desc: '了解什么是「状元」，古代科举考试如何选拔状元。', needPhoto: false, needText: true },
        { id: '8-2', cat: 'knowledge', level: 1, stars: 1, title: '袁嘉谷', desc: '了解袁嘉谷是谁，他有什么成就。', needPhoto: false, needText: true },
        { id: '8-3', cat: 'observe', level: 1, stars: 1, title: '古城摄影', desc: '拍一张石屏古城的照片，描述古城的建筑特点。', needPhoto: true, needText: true },
        { id: '8-4', cat: 'observe', level: 1, stars: 1, title: '校园印象', desc: '拍一张石屏中学的照片，描述校园环境和你的学校有什么不同。', needPhoto: true, needText: true },
        { id: '8-5', cat: 'calculate', level: 2, stars: 3, title: '年代计算', desc: '袁嘉谷生活在1872-1937年。算算他生活在多少年前？他活了多大？', needPhoto: false, needText: true },
        { id: '8-6', cat: 'write', level: 2, stars: 3, title: '古城日记', desc: '写150字日记：描述参观石屏古城的感受。', needPhoto: false, needText: true },
        { id: '8-7', cat: 'challenge', level: 3, stars: 5, title: '科举vs高考', desc: '比较古代科举考试和现代高考的异同，列出3个相同点和3个不同点。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第9天 - 异龙湖·郑营古村
    // ============================================================
    {
      day: 9,
      date: '7/21',
      weekday: '周二',
      location: '石屏→昆明（异龙湖·郑营古村）',
      type: '自然+人文 - 湖泊与古村',
      icon: '🛶',
      color: '#1ABC9C',
      background: [
        '异龙湖是云南九大高原湖泊之一，是石屏的母亲湖。',
        '湖内有大异龙、小异龙两个岛屿，湖周边有湿地，是鸟类栖息地。',
        '郑营古村是中国历史文化名村，保存有完整的明清古建筑群。',
        '陈氏宗祠是郑营古村的标志性建筑，体现了宗祠文化和宗族制度。',
        '石屏豆腐用异龙湖边的井水点制，是国家级非遗。'
      ],
      tasks: [
        { id: '9-1', cat: 'knowledge', level: 1, stars: 1, title: '高原湖泊', desc: '了解异龙湖有什么特点，它和滇池、抚仙湖有什么不同。', needPhoto: false, needText: true },
        { id: '9-2', cat: 'observe', level: 1, stars: 1, title: '湖泊摄影', desc: '拍一张异龙湖的照片，描述湖水和周围环境。', needPhoto: true, needText: true },
        { id: '9-3', cat: 'observe', level: 1, stars: 1, title: '湿地观鸟', desc: '观察异龙湖湿地的水鸟，记录看到3种不同的鸟。', needPhoto: true, needText: true },
        { id: '9-4', cat: 'knowledge', level: 1, stars: 1, title: '什么是宗祠', desc: '了解什么是「宗祠」，宗祠是做什么的。', needPhoto: false, needText: true },
        { id: '9-5', cat: 'observe', level: 2, stars: 3, title: '古村建筑', desc: '拍一张郑营古村的照片，观察古村的建筑风格和街道布局。', needPhoto: true, needText: true },
        { id: '9-6', cat: 'write', level: 2, stars: 3, title: '古村日记', desc: '写150字日记：描述郑营古村给你的感觉。', needPhoto: false, needText: true },
        { id: '9-7', cat: 'challenge', level: 3, stars: 5, title: '古村保护', desc: '设计一个保护古村落的方案，列出3条建议。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第10天 - 昆明·省博物馆·翠湖
    // ============================================================
    {
      day: 10,
      date: '7/22',
      weekday: '周三',
      location: '昆明·省博物馆·翠湖',
      type: '人文景观 - 博物馆',
      icon: '🏛️',
      color: '#D35400',
      background: [
        '云南省博物馆是云南最大的综合性博物馆。',
        '馆内有大量古滇国青铜器——古滇国是2000多年前的古王国，位于云南中部。',
        '牛虎铜案是镇馆之宝，用一头牛和一只虎组合而成，造型奇特。',
        '翠湖是昆明市中心的公园，冬季有红嘴鸥来此过冬。',
        '翠湖周边有云南大学、云南陆军讲武堂等历史建筑。'
      ],
      tasks: [
        { id: '10-1', cat: 'knowledge', level: 1, stars: 1, title: '古滇国', desc: '参观博物馆，了解什么是「古滇国」，它存在于什么时代。', needPhoto: false, needText: true },
        { id: '10-2', cat: 'knowledge', level: 1, stars: 1, title: '青铜器', desc: '观察青铜器展品，了解青铜器的用途，记录3件你喜欢的展品。', needPhoto: true, needText: true },
        { id: '10-3', cat: 'observe', level: 1, stars: 1, title: '镇馆之宝', desc: '了解牛虎铜案是什么，拍一张它的照片。', needPhoto: true, needText: true },
        { id: '10-4', cat: 'observe', level: 2, stars: 3, title: '青铜器写生', desc: '选一件青铜器，画一张草图，标注它的组成部分。', needPhoto: true, needText: false },
        { id: '10-5', cat: 'write', level: 2, stars: 3, title: '博物馆日记', desc: '写150字日记：描述参观省博物馆的感受。', needPhoto: false, needText: true },
        { id: '10-6', cat: 'observe', level: 1, stars: 1, title: '翠湖漫步', desc: '拍一张翠湖的照片，描述湖光山色。', needPhoto: true, needText: true },
        { id: '10-7', cat: 'challenge', level: 3, stars: 5, title: '博物馆馆长', desc: '假如你是博物馆馆长，你会如何布置一个关于云南的展览？写一段200字的方案。', needPhoto: false, needText: true }
      ]
    },

    // ============================================================
    // 第11天 - 篆新农贸市场
    // ============================================================
    {
      day: 11,
      date: '7/23',
      weekday: '周四',
      location: '昆明·篆新农贸市场',
      type: '人文景观 - 市井生活',
      icon: '🥬',
      color: '#27AE60',
      background: [
        '篆新农贸市场是昆明最大的农贸市场之一，是了解云南饮食文化的最佳场所。',
        '云南有「野生菌王国」之称，7月正是野生菌上市的季节！',
        '市场里有大量云南特色食材：野生菌、鲜花、热带水果、特色蔬菜。',
        '农贸市场是一个城市最真实的烟火气所在。'
      ],
      tasks: [
        { id: '11-1', cat: 'knowledge', level: 1, stars: 1, title: '农贸市场', desc: '了解什么是「农贸市场」，它和超市有什么不同。', needPhoto: false, needText: true },
        { id: '11-2', cat: 'observe', level: 1, stars: 1, title: '食材摄影', desc: '拍一张市场里你最喜欢的食材的照片。', needPhoto: true, needText: true },
        { id: '11-3', cat: 'observe', level: 1, stars: 1, title: '野生菌侦探', desc: '观察并记录3种不同的野生菌，查查它们的名字。', needPhoto: true, needText: true },
        { id: '11-4', cat: 'observe', level: 2, stars: 3, title: '人群观察', desc: '观察市场里的人群，描述他们的行为。你在他们身上看到了什么？', needPhoto: false, needText: true },
        { id: '11-5', cat: 'calculate', level: 2, stars: 3, title: '摊位估算', desc: '估算市场里大约有多少个摊位？你是怎么估算的？', needPhoto: false, needText: true },
        { id: '11-6', cat: 'calculate', level: 2, stars: 3, title: '买菜计算', desc: '选择3种食材，记录价格，计算总价。如果你有50元，够买吗？', needPhoto: false, needText: true },
        { id: '11-7', cat: 'write', level: 2, stars: 3, title: '市场日记', desc: '写200字日记：描述篆新农贸市场的热闹场景。', needPhoto: false, needText: true },
        { id: '11-8', cat: 'challenge', level: 3, stars: 5, title: '云南食材图鉴', desc: '设计一个「云南食材图鉴」，列出10种云南特色食材，并说明它们的特点。', needPhoto: false, needText: true }
      ]
    }
  ]
};
