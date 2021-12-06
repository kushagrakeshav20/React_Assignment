
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, n3;

document.write('Fibonacci Series:');
document.write(" " +n1+ " " + n2+ " ");

for (let i = 2; i <= number; i++) {
 ;
    n3 = n1 + n2;
    document.write(n3+ " ")
    n1 = n2;
    n2 = n3;
}