// 切忌：导入时要绝对路径开头，结尾要加文件扩展名！！！
// 单个&批量导出
import {name,ageExport} from "./lib/export.js";
console.log(name);
console.log(ageExport);


// 默认导出
import defaultObj from './lib/export.js'
console.log(defaultObj);
