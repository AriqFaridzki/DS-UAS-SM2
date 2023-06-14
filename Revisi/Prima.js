let angka;
const readline = require('readline-sync');

const getAngka =  () =>{
    const firstNumber = readline.question("Masukan Angka yang ingin dicari : ");
    // console.log(`you input : ${firstNumber}`);

    return [parseInt(firstNumber)];
}

const konversi_akar_ke_integer = (angka) =>{
    return angka ** (1/2);
}

const generatePrime = (amount)=>{
    let storage = []
    let filteredNumber = []
    let primeNumber = []
    


    for (let firstNumber = 2; firstNumber <= amount; firstNumber++) {

        for (let secondNumber = 1; secondNumber <= amount; secondNumber++) {

            if ((firstNumber * secondNumber) <= amount){
                storage.push((firstNumber * secondNumber));
            }
        }
        
    } //generate multiplication

    for (let number = 2; number <= amount; number++) {
        // console.log(storage[index4])
        filteredNumber = storage.filter((numbers) => numbers == number)
        //test bahwa jika number yang ditest memiliki angka yang sama :D

        if(filteredNumber.length == 1){  // jika isi array adalah 1 maka prime
            primeNumber.push(...filteredNumber) //masukan ke dalam  arraay
        }
        
    }

    return primeNumber
    // console.log(storage)
    // console.log(raw)
    // console.log(result)
    
}

const algoritmaPrima1 = (number)=>{
    const hasilAkarConv = konversi_akar_ke_integer(number)
    let hasilPrima = generatePrime(Math.trunc(hasilAkarConv))
    let keputusan =  true
    let pembagi = []

    console.log(`Angka yang dicari ${number}`)
    console.log(`hasil akar adalah ${hasilAkarConv.toFixed(3)}`)
    console.log(`bilangan prima yang <= √${number} adalah ${hasilPrima}`)

    for (let index = 0; index < hasilPrima.length; index++) {
        console.log(` hasil dari ${number} % ${ hasilPrima[index]} : ${number % hasilPrima[index]}`)

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



}

angka = getAngka();
console.log(algoritmaPrima1(angka[0]))
