// Soal No.1

// Buatlah rekursive function untuk menghitung angka faktorial

// Contoh perhitungan angka faktorial:

// 4! = 4 * 3!

// 4! = 4 * 3 * 2!

// 4! = 4 * 3 * 2 * 1

// 4! = 24

function faktorial(n){
    if (n === 0){
        return 1;
    }
        else{
            return n * faktorial(n-1);
        }
}

let nilai = parseInt(prompt("masukan nilai : "));
alert("hasil dari faktorial " + nilai + " adalah " + faktorial(nilai));


// Soal No.2

// Buatlah rekursive function yang dapat menampilkan deret angka genap
// sampai N input.

// Contoh:

// Jika diberi argumen angka 5, maka hasilnya adalah 0 2 4

function deretGenap(n){
    if (n <= 0){
        return 0
    }
        else{
         return n 
        }
        
        
        
}

console.log(deretGenap(5))



// soal no.3
// Buatlah rekursive function yang dapat menghasilkan angka seperti ini

// f(1) = 3

// f(2) = 6

// f(3) = 12

// f(4) = 24

// f(5) = 48

// f(n) = ...

