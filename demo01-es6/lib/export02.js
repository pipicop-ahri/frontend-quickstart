// single default export
export default {
    name: '默认导出',
    print: () => console.log("默认导出")
}

// 单个导出
const a = 0;
export const b = 0;
export const c = 0;

export {a,b as bVar}


