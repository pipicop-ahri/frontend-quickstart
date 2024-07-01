// ES6: let const 解构 链式判断 Promise async await 参数默认值  模板字符串 箭头函数 模块化
// 16  14:53
// 1.let
// 1.1 越域
// {
//     let a = 0;
//     var b = 0;
// }
// console.log(a);
// console.log(b);

// 1.2 重复声明
// let a = 0;
// var b = 0;
// var b = 3;
// let a = 2;

// 1.3 变量提升
// console.log(a);
// console.log(b);
// let a = 0;
// var b = 0;

// 2。const
// const a = 1;
// a = 0;
// assignment to constant variable
// 3.解构
// 3.1 数组解构:部分解构 嵌套解构 默认值  ...表示解构其余的值,...后面的变量可以起任意名
// 数组
// let arr = [1,2,3]
// const [a,...b] = arr;
// console.log(a);
// console.log(b);


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
// 基本用法  指定新的变量名
// const {name:name,age:age,child:{name:nameC,age:ageC}} = person;
// console.log(name);
// console.log(age);
// console.log(nameC);
// console.log(ageC);
// 默认值
// const {name,age} = person;
// console.log(name);
// console.log(age);
// 嵌套对象解构

// 剩余属性
// const {name,age:agec,...childFirst} = person;
// console.log(name);
// console.log(agec);
// console.log(childFirst);


// 4.链判断:原理 判断属性 判断方法 通过?.符号来判断 ,如果值为undefined或Null则短路
// console.log(person?.child?.name)
// console.log(person2?.name || '默认值')
// console.log(person2.name.name);


// 5.参数默认值:基本类型 引用类型
async function add(a=1,person = {}){
    console.log(a + person?.age || 0);
    console.log(" a + person", a + person?.age || 2);
    return a + (person?.age || 2);
}
// add(10,person);

// 6.箭头函数:特征
//     (a,b) => {
//     a + b;
// }


// 7.模版字符串:特征
// let str = `${person.name + 1 + add()} == ${person.age}`;
// console.log(str);

// 8.Promise:原理 创建Promise
// let num = 11;
// const promise = new Promise((resolve,reject) => {
//     if (num % 2 === 0) {
//         resolve('成功');
//     }else{
//         reject('失败');
//     }
// })
// promise.then((res) => console.log(res)).catch((err) => console.log(err));

// 9.async await:改为异步 在异步中使用同步
// async function batchUrl(){
//     try {
//         let newVar = await add(1, person);
//         console.log(newVar);
//     } catch (e) {
//         console.log(e);
//     }
// }
// batchUrl();
// 10.模块化:命名导出 匿名导出 commonJs导出
// 1.匿名导出 2.命名导出 CommonJS导出





// // 函数调用
person.print?.();
person.print5?.() || add(1,2);

