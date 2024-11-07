//Our First For Loop Practice
for (let i = 0; i < 6; i++) {
  console.log("Da ba dee da ba daa");
}

//For Loops Practice
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

//Iterating Arrays Exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
let peoples = people.map((element) => element.toUpperCase());
for (let i = 0; i < peoples.length; i++) {
  console.log(peoples[i]);
}
