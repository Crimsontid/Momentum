/* const age1 = prompt("How old are you?");

console.log(typeof age1, typeof parseInt(age1));

console.log(age1, parseInt(age1)); */

const age2 = parseInt( prompt("How old are you?"));

console.log(isNaN(age2));


if( isNaN(age2) || age2 < 0) {
    console.log("Write a number.");
} else if(age2 < 18) {
    console.log("Get off");
} else if(age2 >=18 && age2 <= 50){
     console.log("Thank you");
} else if (age2 === 77){
    console.log("Good");
} else {
    console.log("Bye");
}