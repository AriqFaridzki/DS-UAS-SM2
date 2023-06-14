const ValidationError = require('../ErrorHandler/ErrorHandler')

const ValidateNumberInputKongruen = (a,b,mod) => {

    if(typeof a != "number"){
        throw new ValidationError("Argumen pertama harus number");
    }
    
    if(typeof b != "number"){
        throw new ValidationError("Argumen kedua harus number");
    }
    
    if(typeof mod != "number"){
        throw new ValidationError("Argumen ketiga harus number");
    }

    if(mod <= 0){
        throw new ValidationError("modulus harus lebih dari 0");
    }

    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new ValidationError("Argumen pertama atau kedua harus bagian dari Integer");
    }
    
}

const ValidateNumberInputEuclidean = (a,b) => {

    if(typeof a != "number"){
        throw new ValidationError("Argumen pertama harus number");
    }
    
    if(typeof b != "number"){
        throw new ValidationError("Argumen kedua harus number");
    }

    if(a <= 0){
        throw new ValidationError("Argumen pertama harus melebihi 0");
    }

    if(b <= 0){
        throw new ValidationError("Argumen kedua harus melebihi 0");
    }

    if(b > a){
        throw new ValidationError("Argumen pertama harus lebih besar dari argumen kedua");
    }
    
}

const ValidateNumberInputPrime = (a) => {

    if(typeof a != "number"){
        throw new ValidationError(`Argumen harus number bukan ${typeof a}`);
    }

    if(a <= 0){
        throw new ValidationError("Argumen harus lebih dari 0");
    }

    if(!Number.isInteger(a)){
        throw new ValidationError("Argumen harus bagian dari Integer");
    }

}

module.exports = {
    ValidateNumberInputKongruen,
    ValidateNumberInputEuclidean,
    ValidateNumberInputPrime
}