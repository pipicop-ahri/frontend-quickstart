// 1.let

// 1.1 越域

// 1.2 重复声明

// 1.3 变量提升

// 2const

// 3.解构
// 3.1 数组解构:部分解构 嵌套解构 默认值
let arr = [1, 2, 3, 4,[5,6,7,8]];

// 3.2 对象解构
const person = {
    name: 'janna',
    age: 18,
    sex: 1,
    dept: {
        deptName: 'OA部门',
        company: '中通服',
        remarks: '备注',
    },
}

// 默认解构 指定新的变量名 嵌套解构 默认值 剩余属性


// 4.链判断:原理 判断属性 判断方法


// 5.参数默认值:基本类型 引用类型 模版字符串


// 6.箭头函数

// 7.Promise:
// 原理：
// 改为异步 在异步中使用同步
function fetchDataAwait() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应失败 ' + response.statusText);
            }
            return response.json();
        }).then(data => {
        console.log(data);
    }).catch(error => {
        console.error('请求失败:', error);
    });
}

// 8.模块化,单个&批量导出（重命名） 默认导出

