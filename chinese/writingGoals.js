
// 写作目标数据
const writingGoals = [
    {
        grade: "四年级",
        goals: [
            "写作目的：乐于表达，增强自信",
            "内容要求：把新奇有趣或受感动的内容写清楚",
            "结构要求：语句连贯，段落初步形成",
            "文体范围：不拘形式写见闻感受，简短书信便条",
            "修改能力：修改有明显错误的词句"
        ]
    },
    {
        grade: "五年级",
        goals: [
            "写作目的：懂得为自我表达和与人交流而写作",
            "内容要求：内容具体，感情真实，珍视独特感受",
            "结构要求：能根据表达需要分段表述",
            "文体范围：记实作文、想象作文、读书笔记、常见应用文",
            "修改能力：主动与他人交换修改，关注整体质量"
        ]
    }
];

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    // Node.js 环境
    module.exports = {
        writingGoals,
    };
} else {
    // 浏览器环境，将数据挂载到全局对象
    window.writingGoals = writingGoals;
}