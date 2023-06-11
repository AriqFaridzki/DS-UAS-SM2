let a,b,hasil, mod;

const cek_kongruen = (a, b, mod) => {
    hasil =  ((konversi_ke_positif(a-b)) % mod == 0);
    if (hasil ==true) {
        return `${a} ≡ ${b} (mod ${mod}) itu ${hasil} dan merupakan kelipatan dari ${mod}` ;
    } else
        return `${a} ≡ ${b} (mod ${mod}) itu ${hasil} dan bukan merupakan kelipatan dari ${mod}` ;
};

// const print_hasil_kongruen = (hasil){
//     if (hasil == true){
//         return ""
//     }
// }

const konversi_ke_positif = (angka) => {
    if (angka <= 0){
        return -1 * angka
    }

    return angka
}

console.log(cek_kongruen(3, 24, 7))
console.log(cek_kongruen(-31, 11, 7))
console.log(cek_kongruen(-15, -64, 7))
console.log(cek_kongruen(13, -1, 7))
console.log(cek_kongruen(23, 3, 7))


//TODO tinggal validasi, input.

//|-34| = 34

// a-b = k

// konvert ke 

// Math.abs(k) dan dapet integer positif 

// k % m == 0

// return True