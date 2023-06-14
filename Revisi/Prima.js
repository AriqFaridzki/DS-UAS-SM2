// let angka;
const readline = require('readline-sync');
const {konversi_akar_ke_integer, generatePrime} = require("../Helper/primeHelper");
const validation = require("../ErrorHandler/ErrorHandlerFunction");

const getAngka =  () =>{
    const firstNumber = readline.question("Masukan Angka yang ingin dicari : ");
    // console.log(`you input : ${firstNumber}`);

    return [parseInt(firstNumber)];
}


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

    for (let index = 0; index < hasilPrima.length; index++) {
        // console.log(` hasil dari ${number} % ${ hasilPrima[index]} : ${number % hasilPrima[index]}`)

        if(Math.trunc(number % hasilPrima[index]) == 0){
            keputusan = false
            pembagi.push(hasilPrima[index]);
        }  
    }
    console.log("")

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
console.log(algoritmaPrima1("a"))
module.exports = algoritmaPrima1