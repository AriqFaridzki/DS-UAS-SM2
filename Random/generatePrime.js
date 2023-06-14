
const generatePrime = (amount)=>{
    let storage = []
    let filteredNumber = []
    let primeNumber = [2]
    


    for (let firstNumber = 2; firstNumber <= amount; firstNumber++) {

        for (let secondNumber = 1; secondNumber <= amount; secondNumber++) {

            // if ((firstNumber * secondNumber) <= amount){
            if ((firstNumber * secondNumber) <= amount && (firstNumber * secondNumber) % 2 != 0){
            // if ((firstNumber * secondNumber) <= amount){
                
                storage.push((firstNumber * secondNumber));
            }
        }
        
    } //generate multiplication

    for (let number = 2; number <= amount; number++) {
        // console.log(storage[index4])
        filteredNumber = storage.filter((numbers) => numbers == number)
        //test bahwa jika number yang ditest memiliki angka yang sama :D
    // console.log(filteredNumber)

        if(filteredNumber.length == 1){  // jika isi array adalah 1 maka prime
            primeNumber.push(...filteredNumber) //masukan ke dalam  arraay
        }
        
    }


    // console.log(storage)
    // console.log(raw)
    // console.log(filteredNumber)
    console.log(primeNumber)
    
}

// enter below 10000 or its gonna take too long ;v (It's Quadratic!)

generatePrime(10000);
// console.log(12 % 2 == 0)
//https://byjus.com/maths/what-is-a-multiple/
//https://www.youtube.com/watch?v=uuQeuE7TogQ
// https://www.youtube.com/watch?v=klcIklsWzrY