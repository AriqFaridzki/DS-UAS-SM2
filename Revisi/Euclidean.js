// const readline = require('readline-sync');

// const getAngka =  () =>{
//     const firstNumber = readline.question("Masukan Angka Pertama : ");
//     // console.log(`you input : ${firstNumber}`);

//     const secondNumber = readline.question("Masukan Angka Kedua : ");
//     // console.log(`you input : ${secondNumber}`);

//     return [parseInt(firstNumber), parseInt(secondNumber)];
// }

const validation = require("../ErrorHandler/ErrorHandlerFunction")



const euclidean = (m,n) => {

    try {
        validation.ValidateNumberInputEuclidean(m,n)

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

    } catch (error) {
        return error.message
    }
    
    
    }

// let Angka = getAngka()
// console.log(euclidean(Angka[0], Angka[1]))

module.exports = euclidean