// ///<reference path="myNameSpace.ts"/> can be used but it's better to use

import { myNameSpace } from './myNameSpace'
let theNameSpaceFunction = myNameSpace.displayData;

console.log(theNameSpaceFunction());