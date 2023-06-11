const euclidAlg = (a,b) =>{
    if (b==0){
        return a;
    } else
        return euclidAlg(b,a%b)
}


// console.log(euclidAlg(312, 70))

