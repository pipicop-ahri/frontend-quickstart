// 单个导出
export const name = 'janna';
export function greet(){
    console.log("Hello World!");
}

// 统一导出
const name2 = 'janna'
// 导出时还可重命名
export {name2 as n2};

