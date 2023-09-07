// const readline = require('readline-sync');

// const getAngka =  () =>{
//     const firstNumber = readline.question("Masukan Angka Pertama : ");
//     // console.log(`you input : ${firstNumber}`);

//     const secondNumber = readline.question("Masukan Angka Kedua : ");
//     // console.log(`you input : ${secondNumber}`);

//     return [parseInt(firstNumber), parseInt(secondNumber)];
// }

/**
 *  Algoritma euclidean(m,n) a,b ∈ N both is NOT 0 and a > b
 *
 * Deskripsi :
 *
 *  READ m as angka pertama
 *  READ n as angka kedua
 *
 *
 *  INIT sisaBagi to null
 *  INIT perulangan to 0
 *
 *  BEGIN
 *
 *     CALL ValidateNumberInputEuclidean with m,n
 *
 *     FOR n is NOT EQUAL to 0
 *          CALCULATE sisaBagi as m % n
 *          CALCULATE m divide by n
 *
 *          swap m to n
 *          swap n to sisaBagi
 *          INCREMENT perulangan
 *
 *     ENDWHILE
 *
 *     IF n is EQUAL to 0 THEN
 *          RETURN " FPBnya adalah " + m + "dan melakukan perulangan sebanyak " + perulangan + "kali"
 *     ENDIF
 *
 *
 *
 *  EXCEPTION
 *      WHEN exception type ValidationError from ValidateNumberInputEuclidean
 *          RETURN error.message
 *  END
 */



const validation = require("../ErrorHandler/ErrorHandlerFunction")



const euclidean = (m,n) => {

    try {
        validation.ValidateNumberInputEuclidean(m,n)

        let sisaBagi;
        let perulangan = 0
        let temp; // nambah lagi 
        // FOR  n is not

        console.log(`PBB : ${m},${n} \n`)
        for (let index = 1; n != 0; ++index) {
            temp = sisaBagi // nambah lagi 

            sisaBagi = m%n //
            // console.log(temp)
            if(sisaBagi == 0){ // nambah lagi  IF
                console.log(`FPB Ketemu! : ${temp}\n`)
            }
            console.log(` ${m} = ${Math.trunc(m/n)} * ${n} + ${sisaBagi}`) // nambah lagi 
            // console.log("                ↓\n            ____\n          ↓")
            m/n
            m = n // agar bisa membagi terus si n nya :D
            n = sisaBagi  // ganti posisi  (ditingal awawajjw)


            perulangan = index

        }

        if(n == 0){

            // return `FPBnya adalah ${m} dan melakukan perulangan sebanyak ${perulangan} kali \n\n`
            return m //buat testing aja
        }

    } catch (error) {
        return error.message
    }


    }
    console.log(euclidean(312, 70)) //2
    console.log(euclidean(377, 610)) //2
    console.log(euclidean(80, 12)) //2
// let Angka = getAngka()
// console.log(euclidean(Angka[0], Angka[1]))

module.exports = euclidean


 // for (let index = 0; n != 0; index++) {

        //     //rumus : m = hasil_bagi * n + sisaBagi

        //     sisaBagi = parseInt(m%n) //
        //     parseInt(m/n) // biar integer (ndak koma)
        //     m = n // agar bisa membagi terus si n nya :D
        //     n = sisaBagi  // ganti posisi  (ditingal awawajjw)
        // }

//Konsep Algoritma ini adalah bilangan yang lebih besar (m) dibagi dengan bilangan yang lebih kecil (n).
