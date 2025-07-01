const knowledge= [
    // 五年级上册 - 小数乘法
    {
        title: "小数乘法的计算方法",
        content: "先按整数乘法算出积，再看因数中一共有几位小数，就从积的右边起数出几位，点上小数点。",
        example: "2.5 × 1.3 = 3.25\n计算：25 × 13 = 325\n因数共有2位小数，所以结果为3.25",
        formula: "小数乘法 = 整数乘法 + 小数点定位",
        category: "计算",
        volume: "上册",
        chapter: "小数乘法"
    },
    {
        title: "积的小数位数规律",
        content: "若积的末尾有0，需先点小数点再去掉0。积的小数位数等于两个因数小数位数之和。",
        example: "2.4 × 0.5 = 1.20 = 1.2\n2.4有1位小数，0.5有1位小数\n积应有2位小数",
        formula: "积的小数位数 = 因数1小数位数 + 因数2小数位数",
        category: "计算",
        volume: "上册",
        chapter: "小数乘法"
    },
    {
        title: "小数乘法运算定律",
        content: "整数乘法运算定律同样适用于小数乘法：交换律、结合律、分配律。",
        example: "交换律：0.5 × 3.6 = 3.6 × 0.5\n分配律：(2.5 + 1.5) × 4 = 2.5 × 4 + 1.5 × 4",
        formula: "a × b = b × a\n(a + b) × c = a × c + b × c",
        category: "计算",
        volume: "上册",
        chapter: "小数乘法"
    },
    // 五年级上册 - 小数除法
    {
        title: "除数是整数的小数除法",
        content: "按整数除法计算，商的小数点与被除数的小数点对齐。",
        example: "22.5 ÷ 5 = 4.5\n按整数除法：225 ÷ 5 = 45\n商的小数点与被除数对齐",
        formula: "被除数 ÷ 整数除数 = 商（小数点对齐）",
        category: "计算",
        volume: "上册",
        chapter: "小数除法"
    },
    {
        title: "除数是小数的除法",
        content: "先把除数化为整数（被除数同倍数扩大），再按整数除法计算。",
        example: "1.26 ÷ 0.3 = 12.6 ÷ 3 = 4.2\n除数扩大10倍，被除数也扩大10倍",
        formula: "小数除法 → 整数除法（同倍数扩大）",
        category: "计算",
        volume: "上册",
        chapter: "小数除法"
    },
    {
        title: "循环小数",
        content: "小数部分从某一位起，一个或几个数字依次不断重复出现的小数。",
        example: "3.333... = 3.3̄\n1.5656... = 1.56̄\n用小圆点表示循环节",
        formula: "循环小数记号：在循环节首末位上点小圆点",
        category: "计算",
        volume: "上册",
        chapter: "小数除法"
    },
    // 五年级上册 - 简易方程
    {
        title: "用字母表示数",
        content: "字母可以表示数、运算定律、公式。数字在前，字母在后，乘号可省略。",
        example: "正方形面积：S = a²\n周长：C = 4a\n3 × a = 3a",
        formula: "字母表示数的规则：数字×字母 = 数字字母",
        category: "应用",
        volume: "上册",
        chapter: "简易方程"
    },
    {
        title: "方程的意义",
        content: "含有未知数的等式叫做方程。方程是等式，但等式不一定是方程。",
        example: "3x + 5 = 14（方程）\n5 + 3 = 8（等式，不是方程）",
        formula: "方程 = 含未知数的等式",
        category: "应用",
        volume: "上册",
        chapter: "简易方程"
    },
    {
        title: "等式的性质",
        content: "等式两边加、减、乘、除以同一个数（除数不为0），等式仍然成立。",
        example: "如果a = b，那么：\na + c = b + c\na - c = b - c\na × c = b × c\na ÷ c = b ÷ c（c≠0）",
        formula: "等式性质：两边同时进行相同运算",
        category: "应用",
        volume: "上册",
        chapter: "简易方程"
    },
    // 五年级上册 - 多边形面积
    {
        title: "平行四边形面积",
        content: "平行四边形的面积等于底乘以高。底和高必须相对应。",
        example: "底 = 6cm，高 = 4cm\n面积 = 6 × 4 = 24cm²",
        formula: "S = a × h（底×高）",
        category: "几何",
        volume: "上册",
        chapter: "多边形面积"
    },
    {
        title: "三角形面积",
        content: "三角形面积等于底乘以高除以2。由平行四边形面积推导而来。",
        example: "底 = 8cm，高 = 6cm\n面积 = 8 × 6 ÷ 2 = 24cm²",
        formula: "S = a × h ÷ 2",
        category: "几何",
        volume: "上册",
        chapter: "多边形面积"
    },
    {
        title: "梯形面积",
        content: "梯形面积等于上底加下底的和乘以高除以2。",
        example: "上底 = 3cm，下底 = 7cm，高 = 4cm\n面积 = (3 + 7) × 4 ÷ 2 = 20cm²",
        formula: "S = (a + b) × h ÷ 2",
        category: "几何",
        volume: "上册",
        chapter: "多边形面积"
    },
    // 五年级下册 - 因数与倍数
    {
        title: "因数和倍数的概念",
        content: "如果a×b=c，那么a和b是c的因数，c是a和b的倍数。",
        example: "2 × 3 = 6\n2和3是6的因数\n6是2和3的倍数",
        formula: "a × b = c → a,b是c的因数，c是a,b的倍数",
        category: "计算",
        volume: "下册",
        chapter: "因数与倍数"
    },
    {
        title: "2、5、3的倍数特征",
        content: "2的倍数：个位是0,2,4,6,8；5的倍数：个位是0或5；3的倍数：各位数字之和是3的倍数。",
        example: "24是2的倍数（个位是4）\n35是5的倍数（个位是5）\n123是3的倍数（1+2+3=6）",
        formula: "倍数特征：看个位数字或数字和",
        category: "计算",
        volume: "下册",
        chapter: "因数与倍数"
    },
    {
        title: "质数与合数",
        content: "质数：只有1和它本身两个因数。合数：除1和它本身外还有其他因数。1既不是质数也不是合数。",
        example: "质数：2,3,5,7,11,13...\n合数：4,6,8,9,10,12...\n特殊：1既不是质数也不是合数",
        formula: "质数：因数只有1和本身\n合数：因数超过2个",
        category: "计算",
        volume: "下册",
        chapter: "因数与倍数"
    },
    // 五年级下册 - 分数的意义和性质
    {
        title: "分数的意义",
        content: "把单位'1'平均分成若干份，表示这样的一份或几份的数叫做分数。",
        example: "3/4表示把单位'1'平均分成4份，取其中3份",
        formula: "分数 = 部分/整体",
        category: "计算",
        volume: "下册",
        chapter: "分数的意义和性质"
    },
    {
        title: "分数的基本性质",
        content: "分数的分子和分母同时乘或除以相同的数（0除外），分数大小不变。",
        example: "1/2 = 2/4 = 3/6\n分子分母同时乘以2或3",
        formula: "a/b = (a×c)/(b×c) = (a÷c)/(b÷c)",
        category: "计算",
        volume: "下册",
        chapter: "分数的意义和性质"
    },
    // 五年级下册 - 长方体和正方体
    {
        title: "长方体的特征",
        content: "6个面、12条棱、8个顶点。相对的面相等，相对的棱长度相等。",
        example: "长方体有3组相对的面\n每组相对的面完全相同\n棱长总和=(长+宽+高)×4",
        formula: "棱长总和 = (a + b + h) × 4",
        category: "几何",
        volume: "下册",
        chapter: "长方体和正方体"
    },
    {
        title: "长方体表面积",
        content: "长方体6个面的面积总和。包括3组相对的面。",
        example: "长=5cm，宽=3cm，高=2cm\n表面积=(5×3+5×2+3×2)×2=62cm²",
        formula: "S = (ab + ah + bh) × 2",
        category: "几何",
        volume: "下册",
        chapter: "长方体和正方体"
    },
    {
        title: "长方体体积",
        content: "长方体体积等于长乘以宽乘以高，也等于底面积乘以高。",
        example: "长=4cm，宽=3cm，高=2cm\n体积=4×3×2=24cm³",
        formula: "V = a × b × h = S底 × h",
        category: "几何",
        volume: "下册",
        chapter: "长方体和正方体"
    }
]

if (typeof module !== 'undefined' && module.exports) {
    // Node.js 环境
    module.exports = {
        knowledge: knowledge
    };
} else {
    // 浏览器环境，将数据挂载到全局对象
    window.knowledge = knowledge;
}