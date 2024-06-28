// 1.let

// 1.1 越域

// 1.2 重复声明

// 1.3 变量提升

// 2。const

// 3.解构
// 3.1 数组解构:部分解构 嵌套解构 默认值

// 3.2 对象解构
const person = {
    name: 'janna',
    age: 18,
    child: {
        name: 'child',
        age: 16,
    },
    print() {
        console.log(`Hello,${this.child?.name} ` + this.child?.age)
    },
    print2: () => {
        console.log(`Hello,${person.name}`);
    }

}
const person2 = {
    name: 'janna2',
    age: 19,
    child: {
        name: 'child2',
        age: 20,
    }
}
// 基本用法

// 指定新的变量名

// 默认值

// 嵌套对象解构

// 剩余属性

// 4.链判断:原理 判断属性 判断方法

// 5.参数默认值:基本类型 引用类型

// 6.箭头函数:特征

// 7.模版字符串:特征

// 8.Promise:原理 创建Promise

// 9.async await:改为异步 在异步中使用同步

// 10.模块化:命名导出 匿名导出 commonJs导出

