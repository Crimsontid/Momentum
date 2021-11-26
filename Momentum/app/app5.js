function sayhello(nameOfPerson, age) {
    console.log("Hello, my name is " + nameOfPerson + " and I'm " + age);
}

sayhello("nico", 10);
sayhello("dal", 23);
sayhello("Lynn", 21);



function plus1(a,b) {
    console.log(a,b);
}

plus1();

function plus2(firstNumber,secondNumber) {
    console.log(firstNumber + secondNumber);
}

plus2();
plus2(8, 60);

function divide(firstNumber,secondNumber) {
    console.log(firstNumber / secondNumber);
}

divide(4,2);


const player = {
    name: "nico",
    sayHi: function(otherPersonName){
        console.log("Hello " + otherPersonName);
    },
}

console.log(player.name);
player.sayHi("Lynn");