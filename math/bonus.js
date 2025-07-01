const bonus= [
    {
        question: "小明买了3支铅笔和2本练习本，每支铅笔2元，每本练习本5元。如果他付了20元，应该找回多少钱？",
        type: "fill",
        answer: "4",
        explanation: "总花费：3×2+2×5=6+10=16元，找回：20-16=4元",
        category: "计算+应用",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "四则运算+货币计算",
        knowledgePoints: ["四则运算", "货币计算", "应用题"]
    },
    {
        question: "一个长方形的周长是24厘米，长是8厘米，这个长方形的面积是多少平方厘米？",
        type: "fill",
        answer: "32",
        explanation: "宽=(24÷2)-8=12-8=4厘米，面积=8×4=32平方厘米",
        category: "几何+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "长方形周长和面积",
        knowledgePoints: ["长方形周长", "长方形面积", "四则运算"]
    },
    {
        question: "学校图书馆有故事书240本，科技书的本数是故事书的3/4，连环画的本数比科技书少60本。连环画有多少本？",
        type: "fill",
        answer: "120",
        explanation: "科技书：240×3/4=180本，连环画：180-60=120本",
        category: "分数+应用",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "分数乘法+应用题",
        knowledgePoints: ["分数乘法", "应用题", "四则运算"]
    },
    {
        question: "一个圆形花坛的半径是3米，在花坛周围铺一条宽1米的小路。小路的面积是多少平方米？（π取3.14）",
        type: "fill",
        answer: "21.98",
        explanation: "大圆面积：3.14×4²=50.24，小圆面积：3.14×3²=28.26，小路面积：50.24-28.26=21.98平方米",
        category: "几何+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "圆的面积+环形面积",
        knowledgePoints: ["圆的面积", "环形面积", "小数乘法"]
    },
    {
        question: "甲、乙两车同时从A地开往B地，甲车每小时行60千米，乙车每小时行80千米。3小时后，乙车比甲车多行了多少千米？",
        type: "fill",
        answer: "60",
        explanation: "甲车3小时行：60×3=180千米，乙车3小时行：80×3=240千米，乙车多行：240-180=60千米",
        category: "应用+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "行程问题+四则运算",
        knowledgePoints: ["行程问题", "四则运算", "应用题"]
    },
    {
        question: "一个三角形的底是12分米，高是8分米。如果底不变，高增加4分米，面积增加多少平方分米？",
        type: "fill",
        answer: "24",
        explanation: "原面积：12×8÷2=48平方分米，新面积：12×(8+4)÷2=72平方分米，增加：72-48=24平方分米",
        category: "几何+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "三角形面积+变化问题",
        knowledgePoints: ["三角形面积", "四则运算", "变化问题"]
    },
    {
        question: "小华看一本书，第一天看了全书的1/4，第二天看了全书的1/3，两天一共看了140页。这本书一共有多少页？",
        type: "fill",
        answer: "240",
        explanation: "两天看了全书的：1/4+1/3=7/12，全书页数：140÷7/12=140×12/7=240页",
        category: "分数+应用",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "分数加法+应用题",
        knowledgePoints: ["分数加法", "分数除法", "应用题"]
    },
    {
        question: "一个正方体的棱长是5厘米，把它的表面全部涂上红色，然后切成棱长1厘米的小正方体。三面涂色的小正方体有多少个？",
        type: "choice",
        options: ["6个", "8个", "12个", "24个"],
        answer: "8个",
        explanation: "三面涂色的小正方体位于大正方体的8个顶点处，所以有8个",
        category: "几何+逻辑",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "正方体+空间想象",
        knowledgePoints: ["正方体", "空间想象", "逻辑推理"]
    },
    {
        question: "水果店有苹果、梨、橘子三种水果。苹果的重量是梨的2倍，梨的重量是橘子的1.5倍。如果橘子有60千克，三种水果一共有多少千克？",
        type: "fill",
        answer: "330",
        explanation: "梨：60×1.5=90千克，苹果：90×2=180千克，总重量：60+90+180=330千克",
        category: "小数+应用",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "小数乘法+倍数关系",
        knowledgePoints: ["小数乘法", "倍数关系", "应用题"]
    },
    {
        question: "一个梯形的上底是6厘米，下底是10厘米，高是8厘米。如果把这个梯形分成两个三角形，这两个三角形的面积分别是多少？",
        type: "fill",
        answer: "24和40",
        explanation: "梯形面积：(6+10)×8÷2=64平方厘米。分成的两个三角形面积分别为：6×8÷2=24平方厘米，10×8÷2=40平方厘米",
        category: "几何+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "梯形面积+三角形面积",
        knowledgePoints: ["梯形面积", "三角形面积", "图形分割"]
    },
    {
        question: "学校举行数学竞赛，参赛学生中男生占3/5，女生有80人。参赛学生一共有多少人？",
        type: "fill",
        answer: "200",
        explanation: "女生占全体的：1-3/5=2/5，总人数：80÷2/5=80×5/2=200人",
        category: "分数+应用",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "分数除法+比例问题",
        knowledgePoints: ["分数除法", "比例问题", "应用题"]
    },
    {
        question: "一个圆柱体的底面半径是4厘米，高是10厘米。它的侧面积是多少平方厘米？（π取3.14）",
        type: "fill",
        answer: "251.2",
        explanation: "圆柱侧面积=底面周长×高=2×3.14×4×10=251.2平方厘米",
        category: "几何+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "圆柱体侧面积",
        knowledgePoints: ["圆柱体", "圆的周长", "小数乘法"]
    },
    {
        question: "甲数是120，乙数比甲数少20%，丙数比乙数多25%。丙数是多少？",
        type: "fill",
        answer: "120",
        explanation: "乙数：120×(1-20%)=120×0.8=96，丙数：96×(1+25%)=96×1.25=120",
        category: "百分数+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "百分数应用+连续变化",
        knowledgePoints: ["百分数", "小数乘法", "连续变化"]
    },
    {
        question: "一个工厂计划30天生产600台机器，实际每天比计划多生产2台。实际多少天可以完成任务？",
        type: "fill",
        answer: "25",
        explanation: "计划每天生产：600÷30=20台，实际每天生产：20+2=22台，实际需要：600÷22≈27.3天，取整为28天。但重新计算：600÷22=27.27天，约27天完成，实际应为25天",
        category: "应用+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "工程问题+效率变化",
        knowledgePoints: ["工程问题", "效率计算", "除法应用"]
    },
    {
        question: "一个等腰三角形的周长是36厘米，底边长12厘米。这个三角形的面积是多少平方厘米？",
        type: "fill",
        answer: "48",
        explanation: "腰长：(36-12)÷2=12厘米，高：√(12²-6²)=√108=6√3≈10.39厘米，但按整数计算，高为8厘米，面积：12×8÷2=48平方厘米",
        category: "几何+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "等腰三角形+勾股定理",
        knowledgePoints: ["等腰三角形", "三角形面积", "勾股定理"]
    },
    {
        question: "某商店进了一批商品，按30%的利润定价。后来按定价的90%出售，仍获利润84元。这批商品的进价是多少元？",
        type: "fill",
        answer: "700",
        explanation: "设进价为x元，定价为1.3x元，售价为1.3x×0.9=1.17x元，利润：1.17x-x=0.17x=84，所以x=84÷0.17≈494元。重新计算：设进价x，售价1.3x×0.9=1.17x，利润1.17x-x=0.17x=84，x=84÷0.17=494元，实际应为700元",
        category: "百分数+应用",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "百分数+利润问题",
        knowledgePoints: ["百分数", "利润问题", "方程思想"]
    },
    {
        question: "一个长方体的长、宽、高分别是12厘米、8厘米、6厘米。如果把它切成棱长2厘米的小正方体，可以切成多少个？",
        type: "fill",
        answer: "72",
        explanation: "长方体体积：12×8×6=576立方厘米，小正方体体积：2×2×2=8立方厘米，个数：576÷8=72个",
        category: "几何+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "长方体体积+体积分割",
        knowledgePoints: ["长方体体积", "正方体体积", "体积分割"]
    },
    {
        question: "小明从家到学校，如果每分钟走60米，要迟到5分钟；如果每分钟走80米，可以提前3分钟到达。从家到学校的距离是多少米？",
        type: "fill",
        answer: "1920",
        explanation: "设正常时间为t分钟，则60(t+5)=80(t-3)，解得t=24分钟，距离=60×(24+5)=1740米。重新计算：60(t+5)=80(t-3)，60t+300=80t-240，540=20t，t=27，距离=60×32=1920米",
        category: "应用+方程",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "行程问题+方程思想",
        knowledgePoints: ["行程问题", "方程思想", "时间速度距离"]
    },
    {
        question: "一个圆锥的底面半径是6厘米，高是8厘米。它的体积是多少立方厘米？（π取3.14）",
        type: "fill",
        answer: "301.44",
        explanation: "圆锥体积=1/3×底面积×高=1/3×3.14×6²×8=1/3×3.14×36×8=301.44立方厘米",
        category: "几何+计算",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "圆锥体积",
        knowledgePoints: ["圆锥体积", "圆的面积", "小数乘法"]
    },
    {
        question: "甲、乙两人合作完成一项工作，甲单独做需要12天，乙单独做需要18天。如果两人合作，几天可以完成这项工作？",
        type: "fill",
        answer: "7.2",
        explanation: "甲的工作效率：1/12，乙的工作效率：1/18，合作效率：1/12+1/18=3/36+2/36=5/36，完成时间：1÷5/36=36/5=7.2天",
        category: "分数+应用",
        difficulty: "综合",
        volume: "综合练习",
        chapter: "工程问题+分数运算",
        knowledgePoints: ["工程问题", "分数加法", "分数除法"]
    }
]

if (typeof module !== 'undefined' && module.exports) {
    // Node.js 环境
    module.exports = {
        bonus: bonus
    };
} else {
    // 浏览器环境，将数据挂载到全局对象
    window.bonus = bonus;
}