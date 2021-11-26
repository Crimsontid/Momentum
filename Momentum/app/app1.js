
/* const : constant 고정된 변수값 업데이트 불가능 */
const a = 5;
const b = 2;
const myName = "Shim";

/* console.log : console 창에 출력 */
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hi " + myName);


/* let : 변수 업데이트 가능 / 최초 한번만 선언 */
let c = 5;
let d = 2;
let yourName = "Shim";

c = 6;
d = 3;
yourName = "Kim";

console.log(c + d);
console.log(c * d);
console.log(c / d);
console.log("Hi " + yourName);


/* var : 구버전 JS의 변수 -어디서든 업데이트 가능 - 변수 보호를 위해 const와 let 을 만들게 됨 */
var e = 5;
var f = 2;
var name = "Lim";

e=8;
f=5;
name = "Min";

console.log(e + f);
console.log(e * f);
console.log(e / f);
console.log("Hi " + name);
