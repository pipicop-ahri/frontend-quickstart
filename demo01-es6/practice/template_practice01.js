// 1.let

// 1.1 越域 var可越域，let不可
// {
//     var a = 1;
//     let b = 2;
// }
// console.log(a);
// console.log(b);

// 1.2 重复声明  var可重复申请，let不可重复申明
// let b = 2;
// let b = 2;
// var c = 3;
// var c = 4;
// console.log(c);

// 1.3 变量提升 var如果先使用会未定义，而let直接报错
// console.log("a",a);
// var a = 1;
//
// console.log("b",b);
// let b = 2;

// 2。const
// const c = 1;
// c = 2;

// 3.解构
// 3.1 数组解构
// const arr = [1,2,3]
// const [first,second,third] = arr;
// console.log(first)
// console.log(second)
// console.log(third);
//
// // 部分解构
// const [one,...two] = arr;
// console.log(one);
// console.log(two);
//
// // 嵌套解构
// const array = [1,2,[3,4]];
// const [t1,t2,[...t3]] = array;
// console.log(t1);
// console.log(t2);
// console.log(t3);

// 默认值
// const [one,two,three,four=0] = [1,2,3];
// console.log(four);

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
// const {name:name,age:age} = person;
// console.log(name);
// console.log(age);
//
// // 指定新的变量名
// const {name:name1,age:age1} = person;
// console.log(name1);
// console.log(age1);
//
// // 默认值
// const {name:name3,sex='男'} = person;
// console.log(name3);
// console.log(sex);
//
// // 嵌套对象解构
// const {name:name4,age:age4,child:{name:cName,age:cAge}} = person;
// console.log(name4);
// console.log(age4);
// console.log(cName);
// console.log(cAge);
//
// // 剩余属性
// const {name:name5,...others} = person;
// console.log(name5);
// console.log(others);


// 4.链判断:使用?.操作符，来判断引用是否为null或undefined,如果为任一则立即短路返回undefined
// 基本用法
// 访问安全的值
// const childName = person?.child?.name;
// console.log(childName);
// // 访问不存在的值，抛出undefined
let child = person?.child?.child || 'default';
console.log(child);
//
// // 函数调用
// person.print?.();
// person.print2?.();
// person.print3?.();  //即使没有这个方法，也不会报错。

// 5.参数默认值
// function fun1(option = {}) {
//     console.log("option：",option);
//     const {
//         name = "janna",
//         age = 20
//     } = option;
//     console.log(`${name},${age}`);
// }
// fun1();

// 6.箭头函数 不能使用this
// const fun = (a=10, b=1) => console.log(a + b);
// fun(2);
//
// const fun2 = (a,b) => {
//     let c = a + b
//     console.log(c);
// }
// fun2(2,2);
// // 把方法形参和方法体复制了，在后面加个=>就可转成箭头函数
// function add(a, b) {
//     let c = a + b
//     console.log(c);
// }

// 7.模版字符串 es6语法，使用反引号``，里面${}中写js中的变量或表达式
// const name = 'janna';
// console.log(`${name} is have`);
// // 可换行
// const text = `one line
// two line
// `;
// console.log(text);
// // 还可以使用任何有效的JavaScript表达式表达式
// const text2 = `${name + person.name}`;
// console.log(text2);
// // 返回html代码
// function makeList(items = []){
//     let listItem = items.map(item => `<li>${item}</li>`).join("\n");
//     return `<ul>${listItem}</ul>`;
// }
// const items = ['apple','orange','banana'];
// console.log(makeList(items));

// 8.Promise 异步对象，解决ajax回调地狱问题 有三种状态，pending进行中，fulfilled成功完成，rejected失败
const promise = new Promise((resolve, reject) => {
    const boo = false;
    if (boo) {
        resolve("成功") //成功回调
    }else{
        reject("失败") //失败回调
    }
});
// then处理成功的结果，catch处理失败的结果
promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
// 将普通的函数转为异步的Promise对象
function add(a,b) {
    return new Promise((resolve,reject) => {
        let c = a + b;
        console.log(c);
        resolve(c);
    })
}
// 9.async await
// 向上面那么转很麻烦，就可以用async了，直接申明在函数前面
async function add2(a,b){
    let c = a + b;
    console.log(newVar);

    console.log(c);
}
// 但如果在异步中还有异步的话，继续使用Promise中的then来处理就会生成回调地狱，所以使用await来同步处理，异常使用
// try-catch，就像写java一样
async function add3(a,b){
    let c = a + b;
    // add(1,2).then(res=>{
    //     console.log(res)
    // })
    try {
        let newVar = await add(1, 2);
        console.log(newVar);
    } catch (e) {
        console.error(e);
    }
}

// 10.模块化
// 在js中要先导出，再在其它js中就可以导入了。最后在html中script引入，type为module


