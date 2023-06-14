// let hasil, angka;

// const readline = require('readline-sync');

// const getAngka =  () =>{
//     const firstNumber = readline.question("Masukan Angka Pertama : ");
//     // console.log(`you input : ${firstNumber}`);

//     const secondNumber = readline.question("Masukan Angka Kedua : ");

//     const modulus = readline.question("Masukan Angka Modulusnya : ");
//     // console.log(`you input : ${secondNumber}`);

//     return [parseInt(firstNumber), parseInt(secondNumber), parseInt(modulus)];
// }



const cek_kongruen = (a, b, mod) => {
    hasil =  ((konversi_ke_positif(a-b)) % mod == 0);
    if (hasil == true) {
        // console.log(`${a} ≡ ${b} (mod ${mod}) itu ${hasil} dan merupakan kelipatan dari ${mod}` );
        return hasil
    } else
        // console.log(`${a} ≡ ${b} (mod ${mod}) itu ${hasil} dan bukan merupakan kelipatan dari ${mod}`) ;
        return hasil
};

const konversi_ke_positif = (angka) => {
    if (angka <= 0){
        return -1 * angka
    }

    return angka
}

// angka = getAngka()
// console.log(cek_kongruen(angka[0],angka[1],angka[2]))



console.log(cek_kongruen(3, 24, 7))
console.log(cek_kongruen(-31, 11, 7))
console.log(cek_kongruen(-15, -64, 7))
console.log(cek_kongruen(13, -1, 7))
console.log(cek_kongruen(23, 3, 7))


//TODO tinggal validasi, input.

//|-34| = 34

// a-b = k

// konvert ke 

// Math.abs(k) dan dapet integer positif 

// k % m == 0

// return True