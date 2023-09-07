

const generateFactorial = (number) =>{
    // console.log(number);
    let numbers = 1;
    for (let index = 1; index <= number; index++) {
        numbers = numbers * index;
    }

    return numbers;
}

// console.log(generateFactorial(5));


const cariSuku = (sukuKe ,a,b, pangkat) => {


    let bag1 = ((a) ** sukuKe - a+1)
    let bag2 = ((b) * a-1)
    let bagianKanan = ((a)**pangkat-(sukuKe+1)) * ((b)**sukuKe-1)
    console.log(`${a}**${pangkat} - ${sukuKe+1} * ${b}**${sukuKe-1}`)


    let bagianKiri = generateFactorial(pangkat) / (generateFactorial(sukuKe)) * bagianKanan
    console.log(bag1)
    console.log(bag2)
}


cariSuku(7,2,-1,11)

// asda