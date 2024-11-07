// Array antrian awal
const antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Antrian Awal : " + antrian);

// Nambah antrian
antrian.push("Nabila");
console.log("Setelah Nabila datang: "+ antrian);

antrian.push("Maza", "Elsi");
console.log("Setelah Maza dan Elsi datang: " + antrian);

// Elsi pulang (pembeli terakhir keluar dari antrian)
antrian.pop();
console.log("Setelah Elsi pulang: " + antrian);

// Pembeli pertama dan kedua dilayani
antrian.shift();
console.log("Setelah Ray dilayani: " + antrian);

antrian.shift();
console.log("Setelah Fiki dilayani: " + antrian);

// Tomi nyerobot antrian
antrian.unshift("Tomi");
console.log("Setelah Tomi nyerobot di depan: " + antrian);
