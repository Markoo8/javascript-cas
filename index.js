let a = Number(prompt('Unesi broj 1'));
let b = Number(prompt('Unesi broj 2'));
let c = Number(prompt('Unesi broj 3'));

if (a > b && a > c) {
  console.log(a + ' je veci');
} else if (b > a && b > c) {
  console.log(b + ' je veci');
} else {
  console.log(c + ' je veci');
}
