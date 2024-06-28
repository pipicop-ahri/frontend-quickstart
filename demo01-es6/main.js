// 切忌：导入时要绝对路径开头，结尾要加文件扩展名！！！
// 切忌：导入时要绝对路径开头，结尾要加文件扩展名！！！
// 切忌：导入时要绝对路径开头，结尾要加文件扩展名！！！
// 1.导入命名导出
import {name, greet, n2 as n3} from './lib/name_export.js'

// 2.导入默认导出
import defaultJanna from './lib/default_export.js'

// 3.CommonJS是node.js采用的标准，用于服务器端模块化，导入语法require(); 需要安装插件
let commonJs = require('./lib/nodejs_module_export');

// isAdult(user.age);
console.log(name);
greet();
console.log(n3);
defaultJanna.print();
console.log(commonJs.name);
