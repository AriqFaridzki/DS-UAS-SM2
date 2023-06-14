// const readline = require('readline-sync');

// const getAngka =  () =>{
//     const firstNumber = readline.question("Masukan Angka Pertama : ");
//     // console.log(`you input : ${firstNumber}`);

//     const secondNumber = readline.question("Masukan Angka Kedua : ");
//     // console.log(`you input : ${secondNumber}`);

//     return [parseInt(firstNumber), parseInt(secondNumber)];
// }


const ValidationError = require('../ErrorHandler/ErrorHandler')

const ValidateNumberInput = (a,b) => {

    if(typeof a != "number"){
        throw new ValidationError("Argumen pertama harus number");
    }
    
    if(typeof b != "number"){
        throw new ValidationError("Argumen kedua harus number");
    }

    if(a <= 0){
        throw new ValidationError("Argumen pertama harus melebihi 0");
    }

    if(b <= 0){
        throw new ValidationError("Argumen kedua harus melebihi 0");
    }

    if(b == a){
        throw new ValidationError("Argumen pertama dan kedua tidak boleh sama");
    }

    if(b > a){
        throw new ValidationError("Argumen pertama harus lebih besar dari argumen kedua");
    }
    
}


const euclidean = (m,n) => {
    let sisaBagi;
        for (let index = 0; n != 0; index++) {
    
            //rumus : m = hasil_bagi * n + sisaBagi 
    
            sisaBagi = parseInt(m%n) // 
            parseInt(m/n) // biar integer (ndak koma)
            m = n // agar bisa membagi terus si n nya :D
            n = sisaBagi  // ganti posisi  (ditingal awawajjw)
        }
    
        if(n == 0){
            return m
        }
    
    }

// let Angka = getAngka()
// console.log(euclidean(Angka[0], Angka[1]))

module.exports = euclidean