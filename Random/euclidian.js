const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });



// const test = new Ariq(1,2)
// test.setFirst(3)
// test.console()

rl.question("input a number : ", (firstNumber)=>{
    console.log(`you input : ${firstNumber}`)
rl.close();
});



const euclidAlg = (a,b) =>{
    if (b==0){
        return a;
    } else
        return euclidAlg(b,a%b)
}

//TODO buat validasi ( ErrorHandler), testing, perbagus Input :D

// console.log(parseInt(312%70))

const eclidean = (m,n) => {
let sisaBagi;
    for (let index = 0; n != 0; index++) {

        //rumus : m = hasil_bagi * n + sisaBagi 

        sisaBagi = parseInt(m%n) // 
        parseInt(m/n) // biar integer (ndak koma)
        m = n // agar bisa membagi terus si n nya :D
        n = sisaBagi  // ganti posisi  (ditingal awawajjw)
    }
// console.log(parseInt(m/n))
// console.log(parseInt(m%n))

    if(n == 0){
        return m
    }

}
// eclidean(input)
// eclidean(312, 70) //2
// eclidean(80, 12) //4
// eclidean(60, 18) //6
// eclidean(45, 6) //6
// eclidean(106, 12) //6
// console.log("============")
// console.log(euclidAlg(312, 70))
// console.log(euclidAlg(80, 12))
// console.log(euclidAlg(60, 18))
// console.log(euclidAlg(45, 6))
// console.log(euclidAlg(106, 12))

// console.log(euclidAlg(312, 70))

// console.log(module)

