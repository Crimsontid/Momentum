const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

const player0 = ["nico", 121212, false, "little bit"];


const player = {
    name: "nico",
    points: 10,
    handsome: false,
    
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.handsome = true; 
console.log(player);

player.lastName = "Shim";
console.log(player);

player.points = player.points + 10;
console.log(player);

