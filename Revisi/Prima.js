// let angka;
const readline = require('readline-sync');
const {konversi_akar_ke_integer, generatePrime} = require("../Helper/primeHelper");
const validation = require("../ErrorHandler/ErrorHandlerFunction");

const getAngka =  () =>{
    const firstNumber = readline.question("Masukan Angka yang ingin dicari : ");
    // console.log(`you input : ${firstNumber}`);

    return [parseInt(firstNumber)];
}

/**
 *  Algoritma algoritmaPrima1(number) a ∈ Z+ both is NOT 0 and a > b
 *  
 *  Math.trunc : remove fractional part on the number (eg. Math.trunc (3.14) = 3)
 * Deskripsi :
 * 
 *  READ number of angka yang ingin dicari apakah prima
 * 
 * 
 * 
 *  
 * 
 *  INIT hasilAkarConv to CALL konversi_akar_ke_integer with number
 *  INIT hasilPrima to CALL generatePrime with (CALL Math.trunc with hasilAkarConv)
 *  INIT keputusan to TRUE
 *  INIT pembagi to empty array
 *  
 *  
 *  BEGIN
 * 
 *     CALL ValidateNumberInputPrime with number
 *     
 *     FOR each element in the hasilPrima array less than index
 *          IF (CALL Math.trunc with (number % hasilPrima[index])) is EQUAL to 0 THEN
 *              SET keputusan to FALSE
 *              SET pembagi to 
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


const algoritmaPrima1 = (number)=>{
    const hasilAkarConv = konversi_akar_ke_integer(number)
    let hasilPrima = generatePrime(Math.trunc(hasilAkarConv))
    let keputusan =  true
    let pembagi = []
    
    try {
    validation.ValidateNumberInputPrime(number)
    console.log(`Angka yang dicari ${number}`)
    console.log(`hasil akar adalah ${hasilAkarConv.toFixed(3)}`)
    console.log(`bilangan prima yang <= √${number} adalah ${hasilPrima}`)
        //FOR each element in the hasilPrima array less than index
    for (let index = 0; index < hasilPrima.length; index++) {
        // console.log(` hasil dari ${number} % ${ hasilPrima[index]} : ${number % hasilPrima[index]}`)
            //
        if(Math.trunc(number % hasilPrima[index]) == 0){
            keputusan = false
            pembagi.push(hasilPrima[index]);
        }  
    }
    console.log("")

        if(number == 2) {
            return "2 adalah Prima genap terkecil \n\n\n\n\n"
        } else if (number == 1){
            return "1 itu relatif prima \n\n\n\n\n"
        }

        if(keputusan == true){
            return "Prima, karena tidak bisa dibagi \n\n\n\n\n"
            
        } else{
            return `Bukan Prima, karena bisa dibagi oleh ${pembagi} \n\n\n\n\n `
        }

        

    } catch (error) {
        return error.message
    }

    

}

// angka = getAngka();
// console.log(algoritmaPrima1(1))
// console.log(algoritmaPrima1(1))
console.log(Math.trunc(12.2312312))
module.exports = algoritmaPrima1

//https://collegedunia.com/exams/prime-numbers-mathematics-articleid-2785
//https://byjus.com/maths/prime-numbers/