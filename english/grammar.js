const grammar= [
    { title: "一般现在时", explanation: "表示经常性、习惯性的动作或存在的状态。", example: "I go to school every day.（我每天去上学。）", volume: "上册", category: "时态" },
    { title: "现在进行时", explanation: "表示正在进行的动作或存在的状态。", example: "She is reading a book.（她正在看书。）", volume: "上册", category: "时态" },
    { title: "一般过去时", explanation: "表示过去某个时间发生的动作或存在的状态。", example: "He played football yesterday.（他昨天踢足球了。）", volume: "上册", category: "时态" },
    { title: "There be句型", explanation: "表示'某地有某物'，强调存在。", example: "There is a book on the desk.（桌子上有一本书。）", volume: "上册", category: "句型" },
    { title: "祈使句", explanation: "用来表达命令、请求、建议等语气。", example: "Open the window, please.（请打开窗户。）", volume: "上册", category: "句型" },
    { title: "形容词比较级", explanation: "用于两者之间的比较，表示'更...'。", example: "This apple is bigger than that one.（这个苹果比那个大。）", volume: "下册", category: "语法" },
    { title: "形容词最高级", explanation: "用于三者或三者以上的比较，表示'最...'。", example: "He is the tallest in our class.（他是我们班最高的。）", volume: "下册", category: "语法" },
    { title: "一般将来时", explanation: "表示将来某个时间要发生的动作或存在的状态。", example: "I will go to Beijing tomorrow.（我明天要去北京。）", volume: "下册", category: "时态" },
    { title: "人称代词主格", explanation: "在句子中作主语的人称代词。", example: "I, you, he, she, it, we, they", volume: "下册", category: "语法" },
    { title: "人称代词宾格", explanation: "在句子中作宾语的人称代词。", example: "me, you, him, her, it, us, them", volume: "下册", category: "语法" },
    { title: "物主代词", explanation: "表示所属关系的代词，分为形容词性物主代词和名词性物主代词。", example: "my, your, his, her, its, our, their (形容词性)；mine, yours, his, hers, its, ours, theirs (名词性)", volume: "下册", category: "语法" },
    { title: "情态动词can", explanation: "表示能力，意为'能，会'。", example: "I can speak English.（我会说英语。）", volume: "下册", category: "语法" },
    { title: "have/has的用法", explanation: "表示'有'，第三人称单数用has，其他人称用have。", example: "She has a cat.（她有一只猫。） I have a book.（我有一本书。）", volume: "下册", category: "语法" },
    { title: "疑问句", explanation: "用于提出问题的句子，分为一般疑问句、特殊疑问句等。", example: "Do you like apples?（你喜欢苹果吗？） What's your name?（你叫什么名字？）", volume: "下册", category: "句型" },
    { title: "否定句", explanation: "表示否定的句子，一般在动词前加not。", example: "I do not (don't) like bananas.（我不喜欢香蕉。）", volume: "下册", category: "句型" }
]

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    // Node.js 环境
    module.exports = {
        grammar: grammar
    };
} else {
    // 浏览器环境，将数据挂载到全局对象
    window.grammar = grammar;
}
