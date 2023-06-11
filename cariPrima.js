//TODO
/** TODO
 *  bilangan a sebagai akar (target cek)

terus bilangan a dikonversi 
menjadi angka biasa akar -> (angka biasa)

prima <= 12 


√157  adalah 2, 3, 5, 7, 11

terus dari hasil prima yang (prima <= 12 ) di coba di bagi dari akar tersebut

jika bilangan prima habis membagi dari target maka composite!

kalau misalnya habis dibagi selain 1 atau bilangan itu sendiri == prima
jika habis dibagi oleh bilangan yanng bukan bilangan itu sendiri == composite
 * 
 * 
 */

const konversi_akar_ke_integer = (angka) =>{
    return Math.trunc(angka ** (1/2));
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
    let hasilPrima = generatePrime(hasilAkarConv)
    let keputusan = true

    console.log(`hasil akar adalah ${hasilAkarConv}`)
    console.log(`bilangan prima yang <= √${number} adalah ${hasilPrima}`)

    for (let index = 0; index < hasilPrima.length; index++) {
        // console.log(number % hasilPrima[index])

        if(Math.trunc(number % hasilPrima[index]) == 0){
            keputusan = false
        }  
    }
    console.log("")

    if(keputusan == true){
        return "ENTE PRIMAAAAAAAAAAAAAAA \n\n\n\n\n"
        
    } else{
        return "ENTE BUKAN PRIMA, ditabrak truk \n\n\n\n\n"
    }



}


console.log(konversi_akar_ke_integer(199))
console.log(algoritmaPrima1(221))
console.log(algoritmaPrima1(199))
console.log(algoritmaPrima1(171))
console.log(algoritmaPrima1(157))
console.log(algoritmaPrima1(12345))
console.log(algoritmaPrima1(4831))
console.log(algoritmaPrima1(3894723))

console.log(1973 == 1973)
// !Number.isInteger(number / element)
// console.log(!Number.isInteger(20.09))
// algoritmaPrima1(199)
// // algoritmaPrima1(157)
// // console.log(generatePrime(14))
// console.log(typeof(73.66666666666667))

// TODO 2