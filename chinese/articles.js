/**
 * 小学语文写作相关数据
 * 包含文章范例、写作目标和写作技巧
 */

// 文章范例数据
const articles = [
    {
        title: "春天的故事",
        author: "现代作家",
        content: "春天来了，万物复苏...",
        appreciation: "这篇文章通过对春天景色的描写，表达了对生命力的赞美。",
        type: "写景",
        learned: false
    },
    {
        title: "我的老师",
        author: "现代作家",
        content: "我的老师是一位和蔼可亲的人...",
        appreciation: "这篇文章通过具体事例展现了老师的品格，表达了对老师的敬爱之情。",
        type: "写人",
        learned: false
    }
];

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    // Node.js 环境
    module.exports = {
        articles,
    };
} else {
    // 浏览器环境，将数据挂载到全局对象
    window.articles = articles;
}