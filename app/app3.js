const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun; /* this is just a string */

console.log(daysOfWeek);


/* There has to be a better way to list something, to group data types. */

const daysOfWeek2 = [mon, tue, wed, thu, fri, sat, sun]; /* this is going to be an array */

const nonsense = [1, 2, true, false, null, undefined, "Hi"];

console.log(daysOfWeek2, nonsense);


const daysOfWeek3 = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek3);

 /* get an item inside of an array */
console.log(daysOfWeek3[0]);
console.log(daysOfWeek3[5]);

/* Add an item to the array*/
daysOfWeek3.push("sun");

console.log(daysOfWeek3);

/* point of an array is to have a list of data inside of only ONE variable ex) shopping list*/

const toBuy = ["potato", "tomato", "apple"];
toBuy.push("kiwi");
console.log(toBuy);
toBuy[3] = "apricot";
console.log(toBuy);