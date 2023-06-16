

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

/**
 *  Algoritma cek_kongruen(a,b, mod) a,b, mod ∈ Z
 *  
 * Deskripsi :
 * 
 *  READ a as angka pertama
 *  READ b as angka kedua
 *  READ mod as pembagi a and b
 * 
 *  INIT hasil to null
 *  INIT hasilSelisih to CALCULATE hasilSelisih as CALL konversi_ke_positif with (a-b) RETURNING hasilKonversi
 *  INIT modMutlak to CALCULATE modMutlak as CALL konversi_ke_positif with mod RETURNING hasilKonversi
 *   
 * 
 *  BEGIN
 * 
 *     CALL ValidationNumberInputKongruen with a,b and mod
 *     
 *     CALCULATE hasil as hasilSelisih modulo modMutlak == 0 as Boolean type
 *
 *     IF hasil is true THEN
 *          
 *          RETURN a + " ≡ " + b + " (modulo " + mod + ") itu " + hasil + " and merupakan kelipatan dari " + mod
 *     ELSE 
 *          RETURN a + " ≡ " + b + " (modulo " + mod + ") itu " + hasil + " and bukan merupakan kelipatan dari " + mod
 *     ENDIF
 * 
 *  EXCEPTION
 *      WHEN exception type ValidationError from ValidationNumberInputKongruen
 *          RETURN error.message
 *  END
 */


const cek_kongruen = (a, b, mod) => {

let penentu;
let hasilSelisih = konversi_ke_positif(a - b)
// let hasilSelisih = a - b    
let modMutlak = konversi_ke_positif(mod)
    try {
        validation.ValidateNumberInputKongruen(a,b,mod);
        penentu = (hasilSelisih % modMutlak == 0);
        // test = ((konversi_ke_positif(a - b)) % mod);

        if (penentu == true) {
            return `${a} ≡ ${b} (modulo ${mod}) itu ${penentu} dan merupakan kelipatan dari ${mod}`
            // return hasil
        } else
            return `${a} ≡ ${b} (modulo ${mod}) itu ${penentu} dan bukan merupakan kelipatan dari ${mod}`
            // return hasil
    } catch (error) {
        return error.message
    }
    
};

// angka = getAngka()

// console.log(cek_kongruen(angka[0],angka[1],angka[2]))
console.log(cek_kongruen(7,12,-5))
console.log(cek_kongruen(12,7,-5))
console.log(cek_kongruen(12,17,"A"))

module.exports = cek_kongruen;

// exports.module = cek_kongruen