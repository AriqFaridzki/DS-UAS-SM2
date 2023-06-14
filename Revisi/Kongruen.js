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

class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

const ValidateNumberInput = (a,b,mod) => {

    if(typeof a != "number"){
        throw new ValidationError("Argumen pertama harus number");
    }
    
    if(typeof b != "number"){
        throw new ValidationError("Argumen kedua harus number");
    }
    
    if(typeof mod != "number"){
        throw new ValidationError("Argumen ketiga harus number");
    }

    
}


const cek_kongruen = (a, b, mod) => {
    
    try {
        ValidateNumberInput(a,b,mod);
        hasil =  ((konversi_ke_positif(a-b)) % mod == 0);
    if (hasil == true) {
        // console.log(`${a} ≡ ${b} (mod ${mod}) itu ${hasil} dan merupakan kelipatan dari ${mod}` );
        return hasil
    } else
         // console.log(`${a} ≡ ${b} (mod ${mod}) itu ${hasil} dan bukan merupakan kelipatan dari ${mod}` );
        return hasil
    } catch (error) {
        return error.message
    }
    
};

const konversi_ke_positif = (angka) => {
    if (angka <= 0){
        return -1 * angka
    }

    return angka
}

// angka = getAngka()
// console.log(cek_kongruen(angka[0],angka[1],angka[2]))
// console.log(cek_kongruen(false, null, "a"))

module.exports = cek_kongruen;

// exports.module = cek_kongruen