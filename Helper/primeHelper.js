const konversi_akar_ke_integer = (angka) =>{
    return angka ** (1/2);
}


/**
 *  Algoritma generatePrime(amount) number ∈ N and number is NOT 0
 *  
 *  .filter : Returns the elements of an array that meet the condition specified in a callback function.
 *          *TLDR : clone the spesific element of the array that meets the condition inside that bracket.
 *  
 * Deskripsi :
 * 
 *  READ amount as berapa banyak bilangan prima yang mau di hasilkan
 * 
 * 
 * 
 *  INIT tempatHasilPerkalian to empty array
 *  INIT filteredNumber to empty array
 *  INIT primeNumber to array filled with single number of 2 
 *  
 *  BEGIN
 * 
 * 
 *     FOR firstnumber that starts from 2 that is less than or EQUAL to amount
 *          FOR secondNumber that starts from 1 that is less than or EQUAL to firstNumber
 * 
 *              SET hasilPerkalian by CALCULATE firstNumber times secondNumber
 * 
 *              IF hasilPerkalian is less then or EQUAL to amount AND hasilPerkalian % 2 is NOT EQUAL to 0 THEN
 *                  SET tempatHasilPerkalian by adding hasilPerkalian to it
 *              ENDIF
 * 
 *          ENDFOR
 * 
 *     ENDFOR
 * 
 *     FOR index that starts from 2 and that is less than amount
 * 
 *  
 *          SET filteredNumber BY COMPUTE tempatHasilPerkalian.filter((daftarAngka) daftarAngka that is EQUAL to index)
 * 
 *          IF the length of filteredNumber == 1 THEN
 *              SET primeNumber by adding the elements on the filteredNumber array
 *          ENDIF
 * 
 *     ENDFOR
 * 
 *     RETURN primeNumber
 *       
 *    
 *  END
 */



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