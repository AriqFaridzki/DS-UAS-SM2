
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


    // console.log(storage)
    // console.log(raw)
    // console.log(result)
    console.log(primeNumber)
    
}

// enter below 10000 or its gonna take too long ;v (It's Quadratic!)

generatePrime(13);
//https://byjus.com/maths/what-is-a-multiple/
//https://www.youtube.com/watch?v=uuQeuE7TogQ
// https://www.youtube.com/watch?v=klcIklsWzrY