

// const readline = require('readline-sync');

// const getAngka =  () =>{
//     const firstNumber = readline.question("Masukan Angka Pertama : ");
//     // console.log(`you input : ${firstNumber}`);

//     const secondNumber = readline.question("Masukan Angka Kedua : ");

//     const modulus = readline.question("Masukan Angka Modulusnya : ");
//     // console.log(`you input : ${secondNumber}`);

//     return [parseInt(firstNumber), parseInt(secondNumber), parseInt(modulus)];
// }

const konversi_ke_positif = require("../Helper/KongruenHelper")
const validation = require("../ErrorHandler/ErrorHandlerFunction")

const cek_kongruen = (a, b, mod) => {
let hasil;
    try {
        validation.ValidateNumberInputKongruen(a,b,mod);
        hasil = ((konversi_ke_positif(a - b)) % mod == 0);

        if (hasil == true) {
            return `${a} ≡ ${b} (mod ${mod}) itu ${hasil} dan merupakan kelipatan dari ${mod}`
            // return hasil
        } else
            return `${a} ≡ ${b} (mod ${mod}) itu ${hasil} dan bukan merupakan kelipatan dari ${mod}`
            // return hasil
    } catch (error) {
        return error.message
    }
    
};

// angka = getAngka()

// console.log(cek_kongruen(angka[0],angka[1],angka[2]))
console.log(cek_kongruen(7,12,5))
// console.log(cek_kongruen(12,7,5))
// console.log(cek_kongruen(12,17,"A"))

module.exports = cek_kongruen;

// exports.module = cek_kongruen