// String
let animal1 = 'kucing';
let animal2 = 'anjing';
console.log('Ini adalah string: ' + animal1 + ', ' + animal2);

// Boolean
let siang = true;
let malam = false;
console.log('Apakah ini malam? ' + malam);

// Numbers
let umurKucing = 4.5;
let jumlahKaki = 4;
console.log('umur kucing yaitu: ' + umurKucing + ', dan jumlah kaki kucing ada : ' + jumlahKaki);

// Array
let makanan = ['ikan', 'susu', 'daging', 'ayam'];
console.log(makanan);

// Object
const kucing = {
    nama: 'Coco',
    warna: 'putih',
    umur: 2,
    jinak: true
};
console.log('Nama kucing: ' + kucing.nama);

// Tampilkan seluruh object
console.log(kucing); // object

// Logical operator
let umurKecil = 2;
let umurBesar = 5;

console.log(umurKecil < 3 && umurBesar > 3);  
console.log(umurKecil > 3 && umurBesar > 3);  
console.log(umurKecil < 3 || umurBesar > 3);  
console.log(umurKecil > 3 || umurBesar > 3);  
console.log(!(umurKecil < 3));                
console.log(!(umurKecil < 3 && umurBesar > 3)); 

// Equality Comparison
const angka1 = 10;
const angka2 = 10.0;
const stringAngka = '10';

console.log(angka1 == angka2);       
console.log(angka1 === angka2);      
console.log(angka1 == stringAngka);  
console.log(angka1 === stringAngka); 
