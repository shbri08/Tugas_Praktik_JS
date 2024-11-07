//fungsi printHeart
function printHeart() {
    console.log("<3");
}
printHeart();

//fungsi return
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));  // Output: 6
console.log(multiply(9, 9));  // Output: 81
console.log(multiply(5, 4));  // Output: 20

//function scope
//Soal A
let animal = "Giant Pacific Octopus"; //mendeklarasikan variabel animal
function observe(){
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();

//Soal B
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);

//arow function
const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid")); // Output: "Hello Hagrid!"
console.log(sayHello("Luna"));   // Output: "Hello Luna!"
