const practice = {
    // 计算类题目
    "计算": {
        "基础": [
            {
                question: "计算：2.5 × 1.4",
                options: ["3.5", "3.6", "3.4", "3.8"],
                answer: "3.5",
                explanation: "先算25×14=350，因数共有2位小数，所以结果为3.50=3.5",
                type: "choice",
                category: "计算",
                volume: "上册",
                difficulty: "基础",
                chapter: "小数乘法"
            },
            {
                question: "计算：0.25 × 4",
                answer: "1",
                explanation: "0.25×4=1，这是一个常见的计算结果",
                type: "fill",
                category: "计算",
                volume: "上册",
                difficulty: "基础",
                chapter: "小数乘法"
            },
            {
                question: "计算：12.6 ÷ 3",
                options: ["4.2", "4.3", "4.1", "4.4"],
                answer: "4.2",
                explanation: "按整数除法计算126÷3=42，商的小数点与被除数对齐，结果为4.2",
                type: "choice",
                category: "计算",
                volume: "上册",
                difficulty: "基础",
                chapter: "小数除法"
            },
            {
                question: "计算：1.44 ÷ 0.12",
                answer: "12",
                explanation: "除数扩大100倍变为12，被除数也扩大100倍变为144，144÷12=12",
                type: "fill",
                category: "计算",
                volume: "上册",
                difficulty: "基础",
                chapter: "小数除法"
            }
        ],
        "提高": [
            {
                question: "用简便方法计算：1.25 × 0.8 × 2.5",
                answer: "2.5",
                explanation: "1.25×0.8=1，1×2.5=2.5。利用乘法结合律简化计算",
                type: "fill",
                category: "计算",
                volume: "上册",
                difficulty: "提高",
                chapter: "小数乘法"
            },
            {
                question: "计算：(2.5 + 1.25) × 0.4",
                answer: "1.5",
                explanation: "先算括号内：2.5+1.25=3.75，再算3.75×0.4=1.5",
                type: "fill",
                category: "计算",
                volume: "上册",
                difficulty: "提高",
                chapter: "小数乘法"
            },
            {
                question: "下面哪个数是24的因数？",
                options: ["5", "7", "8", "9"],
                answer: "8",
                explanation: "24 = 8 × 3，所以8是24的因数",
                type: "choice",
                category: "计算",
                volume: "下册",
                difficulty: "提高",
                chapter: "因数与倍数"
            },
            {
                question: "在15、18、21、25中，3的倍数有哪些？",
                answer: "15、18、21",
                explanation: "3的倍数特征：各位数字之和是3的倍数。15(1+5=6)、18(1+8=9)、21(2+1=3)都是3的倍数",
                type: "fill",
                category: "计算",
                volume: "下册",
                difficulty: "提高",
                chapter: "因数与倍数"
            }
        ],
        "困难": [
            {
                question: "计算：(3.2 × 1.25 + 6.8 × 1.25) ÷ 2.5",
                answer: "5",
                explanation: "先提取公因数：(3.2+6.8)×1.25÷2.5=10×1.25÷2.5=12.5÷2.5=5",
                type: "fill",
                category: "计算",
                volume: "上册",
                difficulty: "困难",
                chapter: "小数乘除法"
            },
            {
                question: "把3/4化成分母是12的分数",
                answer: "9/12",
                explanation: "根据分数基本性质，分子分母同时乘以3：3/4 = 9/12",
                type: "fill",
                category: "计算",
                volume: "下册",
                difficulty: "困难",
                chapter: "分数的意义和性质"
            },
            {
                question: "比较大小：2/3 ○ 3/4",
                answer: "<",
                explanation: "通分：2/3 = 8/12，3/4 = 9/12，因为8 < 9，所以2/3 < 3/4",
                type: "fill",
                category: "计算",
                volume: "下册",
                difficulty: "困难",
                chapter: "分数的意义和性质"
            },
            {
                question: "计算：7/12 + 5/18 - 1/6",
                options: ["2/3", "1/2", "5/9", "7/18"],
                answer: "2/3",
                explanation: "通分为36：21/36 + 10/36 - 6/36 = 25/36 = 2/3",
                type: "choice",
                category: "计算",
                volume: "下册",
                difficulty: "困难",
                chapter: "分数加减法"
            }
        ]
    },
    // 应用类题目
    "应用": {
        "基础": [
            {
                question: "解方程：x + 15 = 23",
                answer: "8",
                explanation: "等式两边同时减去15：x = 23 - 15 = 8",
                type: "fill",
                category: "应用",
                volume: "上册",
                difficulty: "基础",
                chapter: "简易方程"
            },
            {
                question: "解方程：3x = 21",
                answer: "7",
                explanation: "等式两边同时除以3：x = 21 ÷ 3 = 7",
                type: "fill",
                category: "应用",
                volume: "上册",
                difficulty: "基础",
                chapter: "简易方程"
            },
            {
                question: "小明有20元，买了3支笔，每支5元，还剩多少钱？",
                options: ["5元", "10元", "15元", "8元"],
                answer: "5元",
                explanation: "20 - 3 × 5 = 20 - 15 = 5元",
                type: "choice",
                category: "应用",
                volume: "上册",
                difficulty: "基础",
                chapter: "四则运算"
            },
            {
                question: "一个班有40人，其中男生占3/5，女生有多少人？",
                answer: "16",
                explanation: "女生人数 = 40 × (1 - 3/5) = 40 × 2/5 = 16人",
                type: "fill",
                category: "应用",
                volume: "下册",
                difficulty: "基础",
                chapter: "分数应用题"
            }
        ],
        "提高": [
            {
                question: "小明买了5支铅笔，每支x元，一共花了10元。列方程求每支铅笔的价格。",
                answer: "5x = 10, x = 2",
                explanation: "根据题意列方程：5x = 10，解得x = 2，每支铅笔2元",
                type: "fill",
                category: "应用",
                volume: "上册",
                difficulty: "提高",
                chapter: "简易方程"
            },
            {
                question: "甲乙两地相距240千米，汽车从甲地到乙地用了4小时，平均每小时行多少千米？",
                answer: "60",
                explanation: "平均速度 = 总路程 ÷ 总时间 = 240 ÷ 4 = 60千米/小时",
                type: "fill",
                category: "应用",
                volume: "上册",
                difficulty: "提高",
                chapter: "行程问题"
            },
            {
                question: "一件衣服原价120元，打8折后的价格是多少？",
                options: ["96元", "100元", "110元", "90元"],
                answer: "96元",
                explanation: "打8折即按原价的80%计算：120 × 0.8 = 96元",
                type: "choice",
                category: "应用",
                volume: "下册",
                difficulty: "提高",
                chapter: "百分数应用"
            },
            {
                question: "一个水池，甲管单独注满需要6小时，乙管单独注满需要4小时，两管同时开，多少小时注满？",
                answer: "2.4",
                explanation: "甲管效率1/6，乙管效率1/4，合作效率1/6+1/4=5/12，时间=1÷5/12=12/5=2.4小时",
                type: "fill",
                category: "应用",
                volume: "下册",
                difficulty: "提高",
                chapter: "工程问题"
            }
        ],
        "困难": [
            {
                question: "解方程：2(x + 3) = 3(x - 1)",
                answer: "9",
                explanation: "展开：2x + 6 = 3x - 3，移项：6 + 3 = 3x - 2x，解得x = 9",
                type: "fill",
                category: "应用",
                volume: "上册",
                difficulty: "困难",
                chapter: "简易方程"
            },
            {
                question: "甲乙两人同时从A地出发到B地，甲每分钟走60米，乙每分钟走80米，乙比甲早到5分钟，A、B两地距离是多少米？",
                answer: "1200",
                explanation: "设距离为x米，甲用时x/60分钟，乙用时x/80分钟，x/60-x/80=5，解得x=1200米",
                type: "fill",
                category: "应用",
                volume: "上册",
                difficulty: "困难",
                chapter: "行程问题"
            },
            {
                question: "一个工厂计划30天完成一批零件，实际每天比计划多做20个，结果提前6天完成。计划每天做多少个？",
                options: ["80个", "100个", "120个", "60个"],
                answer: "80个",
                explanation: "设计划每天做x个，30x=(x+20)×24，解得x=80个",
                type: "choice",
                category: "应用",
                volume: "下册",
                difficulty: "困难",
                chapter: "工程问题"
            },
            {
                question: "某商品先涨价20%，再降价20%，现价与原价相比如何？",
                answer: "降低了4%",
                explanation: "设原价为100，涨价后120，再降价后120×0.8=96，比原价降低4%",
                type: "fill",
                category: "应用",
                volume: "下册",
                difficulty: "困难",
                chapter: "百分数应用"
            }
        ]
    },
    // 几何类题目
    "几何": {
        "基础": [
            {
                question: "平行四边形的底是8cm，高是5cm，面积是多少？",
                options: ["40cm²", "13cm²", "20cm²", "30cm²"],
                answer: "40cm²",
                explanation: "平行四边形面积 = 底 × 高 = 8 × 5 = 40cm²",
                type: "choice",
                category: "几何",
                volume: "上册",
                difficulty: "基础",
                chapter: "多边形面积"
            },
            {
                question: "三角形的底是12cm，高是8cm，面积是多少？",
                answer: "48",
                explanation: "三角形面积 = 底 × 高 ÷ 2 = 12 × 8 ÷ 2 = 48cm²",
                type: "fill",
                category: "几何",
                volume: "上册",
                difficulty: "基础",
                chapter: "多边形面积"
            },
            {
                question: "梯形的上底是6cm，下底是10cm，高是4cm，面积是多少？",
                answer: "32",
                explanation: "梯形面积 = (上底 + 下底) × 高 ÷ 2 = (6 + 10) × 4 ÷ 2 = 32cm²",
                type: "fill",
                category: "几何",
                volume: "上册",
                difficulty: "基础",
                chapter: "多边形面积"
            },
            {
                question: "正方体的棱长是5cm，体积是多少？",
                options: ["125cm³", "75cm³", "100cm³", "150cm³"],
                answer: "125cm³",
                explanation: "正方体体积 = 棱长³ = 5³ = 125cm³",
                type: "choice",
                category: "几何",
                volume: "下册",
                difficulty: "基础",
                chapter: "长方体和正方体"
            }
        ],
        "提高": [
            {
                question: "一个平行四边形的面积是60cm²，底是12cm，高是多少？",
                answer: "5",
                explanation: "根据面积公式：高 = 面积 ÷ 底 = 60 ÷ 12 = 5cm",
                type: "fill",
                category: "几何",
                volume: "上册",
                difficulty: "提高",
                chapter: "多边形面积"
            },
            {
                question: "长方体的长是6cm，宽是4cm，高是3cm，表面积是多少？",
                answer: "108",
                explanation: "表面积 = (6×4 + 6×3 + 4×3) × 2 = (24 + 18 + 12) × 2 = 108cm²",
                type: "fill",
                category: "几何",
                volume: "下册",
                difficulty: "提高",
                chapter: "长方体和正方体"
            },
            {
                question: "一个圆的半径是3cm，面积是多少？（π取3.14）",
                options: ["28.26cm²", "18.84cm²", "9.42cm²", "37.68cm²"],
                answer: "28.26cm²",
                explanation: "圆的面积 = π × r² = 3.14 × 3² = 3.14 × 9 = 28.26cm²",
                type: "choice",
                category: "几何",
                volume: "下册",
                difficulty: "提高",
                chapter: "圆的面积"
            },
            {
                question: "一个等腰三角形的底是8cm，腰是5cm，高是多少？",
                answer: "3",
                explanation: "利用勾股定理：高² + (底÷2)² = 腰²，高² + 4² = 5²，高² = 25 - 16 = 9，高 = 3cm",
                type: "fill",
                category: "几何",
                volume: "上册",
                difficulty: "提高",
                chapter: "三角形"
            }
        ],
        "困难": [
            {
                question: "一个组合图形由一个长方形和一个半圆组成，长方形长10cm，宽6cm，半圆直径等于长方形的宽，求组合图形的面积。（π取3.14）",
                answer: "74.13",
                explanation: "长方形面积：10×6=60cm²，半圆面积：3.14×3²÷2=14.13cm²，总面积：60+14.13=74.13cm²",
                type: "fill",
                category: "几何",
                volume: "下册",
                difficulty: "困难",
                chapter: "组合图形面积"
            },
            {
                question: "一个长方体的体积是120cm³，底面积是24cm²，高是多少？",
                answer: "5",
                explanation: "根据体积公式：高 = 体积 ÷ 底面积 = 120 ÷ 24 = 5cm",
                type: "fill",
                category: "几何",
                volume: "下册",
                difficulty: "困难",
                chapter: "长方体和正方体"
            },
            {
                question: "一个圆锥的底面半径是4cm，高是9cm，体积是多少？（π取3.14）",
                options: ["150.72cm³", "113.04cm³", "226.08cm³", "75.36cm³"],
                answer: "150.72cm³",
                explanation: "圆锥体积 = 1/3 × π × r² × h = 1/3 × 3.14 × 4² × 9 = 1/3 × 3.14 × 16 × 9 = 150.72cm³",
                type: "choice",
                category: "几何",
                volume: "下册",
                difficulty: "困难",
                chapter: "圆锥体积"
            },
            {
                question: "一个梯形的面积是45cm²，上底是5cm，下底是10cm，高是多少？",
                answer: "6",
                explanation: "根据梯形面积公式：高 = 2×面积÷(上底+下底) = 2×45÷(5+10) = 90÷15 = 6cm",
                type: "fill",
                category: "几何",
                volume: "上册",
                difficulty: "困难",
                chapter: "多边形面积"
            }
        ]
    }
}

if (typeof module !== 'undefined' && module.exports) {
    // Node.js 环境
    module.exports = {
        practice: practice
    };
} else {
    // 浏览器环境，将数据挂载到全局对象
    window.practice = practice;
}