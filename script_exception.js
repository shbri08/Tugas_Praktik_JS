//callback
function myfirst(callback) {
  myDisplayer("Hello");
  callback();
}

function mySecond() {
  myDisplayer("Goodbye");
}

function myDisplayer(message) {
  console.log(message);
}

myfirst(mySecond);

//setTimeout
console.log("paragraf 1");
setTimeout(() => {
  console.log("paragraf 2");
}, 3000);
console.log("paragraf 3");

//setInterval
function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");

//erorheadling
function bagiDuaAngka(a, b) {
  try {
    // Memeriksa apakah input adalah angka
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input harus berupa angka.");
    }

    // Memeriksa apakah pembagi adalah nol
    if (b === 0) {
      throw new Error("Pembagian dengan nol tidak diperbolehkan.");
    }

    // Melakukan pembagian dan mengembalikan hasil
    return a / b;
  } catch (error) {
    // Menampilkan pesan kesalahan
    console.error(error.message);
  }
}

// Contoh penggunaan
console.log(bagiDuaAngka(10, 2)); // Output: 5
console.log(bagiDuaAngka(10, 0)); // Output: Pembagian dengan nol tidak diperbolehkan.
console.log(bagiDuaAngka(10, "a")); // Output: Input harus berupa angka.
