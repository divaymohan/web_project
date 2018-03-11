"use strict";
// how to use alert
/*
1.next line means semicolon in most of the cases 
2.but it doesn't work in all the cases for example

[1,2].foreach(alert)

because javascript does not accept automatic semicolon before the square bracket

*/
let UserName = 'Wrong User name';
let PassWord = `Wrong Password ${UserName}`;

alert(`Hello ${1}`);
alert(`Hello ${"UserName"}`);
alert(`Hello ${UserName}`)
[1,2].forEach(alert)

alert