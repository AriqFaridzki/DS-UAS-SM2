const konversi_akar_ke_integer = (angka) =>{
    return angka ** (1/2);
}

const generatePrime = (amount)=>{
    let storage = []
    let filteredNumber = []
    let primeNumber = [2]
    


    for (let firstNumber = 2; firstNumber <= amount; firstNumber++) {

        for (let secondNumber = 1; secondNumber <= amount; secondNumber++) {

            if ((firstNumber * secondNumber) <= amount && (firstNumber * secondNumber) % 2 != 0){
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

module.exports = {konversi_akar_ke_integer, generatePrime}