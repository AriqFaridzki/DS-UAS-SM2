
/**
 *  Algoritma generate(amount) number ∈ N and number is NOT 0
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
    let tempatHasilPerkalian = []
    let filteredNumber = []
    let primeNumber = [2]
    


    for (let firstNumber = 2; firstNumber <= amount; firstNumber++) {

        for (let secondNumber = 1; secondNumber <= amount; secondNumber++) {

            // if ((firstNumber * secondNumber) <= amount){
            let hasilPerkalian = firstNumber * secondNumber
            if ((hasilPerkalian) <= amount && hasilPerkalian % 2 != 0){
            // if ((firstNumber * secondNumber) <= amount){
                
                tempatHasilPerkalian.push(hasilPerkalian);
            }
        }
        
    } //generate multiplication

    // console.log(tempatHasilPerkalian)
    for (let index = 2; index <= amount; index++) {
        // console.log(tempatHasilPerkalian[index4])
        filteredNumber = tempatHasilPerkalian.filter((daftarAngka) => daftarAngka == index)
        //test bahwa jika number yang ditest memiliki angka yang sama :D
        // console.log(filteredNumber)

        if(filteredNumber.length == 1){  // jika isi array adalah 1 maka prime
            primeNumber.push(...filteredNumber) //masukan ke dalam  arraay
        }
        
    }


    // console.log(tempatHasilPerkalian)
    // console.log(raw)
    // console.log(filteredNumber)
    console.log(primeNumber)
    
}

// enter below 10000 or its gonna take too long ;v (It's Quadratic!)

generatePrime(20);
// console.log(12 % 2 == 0)
//https://byjus.com/maths/what-is-a-multiple/
//https://www.youtube.com/watch?v=uuQeuE7TogQ
// https://www.youtube.com/watch?v=klcIklsWzrY