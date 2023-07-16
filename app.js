// ! -----------------Array icerisindeki olan cut ededleri ve onlarin sayini tapin-----------------
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evens = numbers.filter((a, b) => a % 2 === 0);

// console.log(evens.length);
// console.log(evens);

// ----------------------Array icerisindeki sade ve murekkeb ededleri ayirin ----------------

let numbers = [4, 6, 8, 9, 7, 13];
const checkIsPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
let primes = numbers.filter(checkIsPrime);
console.log(primes);

// const checkIsComposite = (n) => {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return true;
//     }
//   }
//   return false;
// };
// let composite = numbers.filter(checkIsComposite);

// console.log(composite);

// * ------------------ array icerisindeki ilk sade ededi tapin------------------/

// let numbers = [4, 6, 8, 9, 7, 13];
// const checkIsPrime = (n) => {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// let primes = numbers.filter(checkIsPrime);
// console.log(primes.at(0));

// ? ---------------- Array icerisindeki ededlerin cemi -----------------

// let numbers = [4, 6, 8, 9, 7];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

//other
// let arr = [4, 8, 19, 32, 57, 99, 101, 200, 100];
// console.log(arr.reduce((a, b) => a + b))

// todo  ----------------- Array daxilinde olan mukemmel ededleri tapin -------------------

// let numbers = [4, 6, 28, 9];
// const checkIsMukemmel = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//       sum += i;
//     }
//     if (sum === n) {
//       return true;
//     }
//   }
//   return false;
// };
// let mukemmel = numbers.filter(checkIsMukemmel);
// console.log(mukemmel);

// ------------------array icerisinde sonu 3 olan nece element oldugunu tapin-----------------

// let numbers = [4, 6, 8, 9, 7, 13];
// const checkIsNumber = (n) => {
//   if (n % 10 === 3) {
//     return true;
//   }

//   return false;
// };
// let num = numbers.filter(checkIsNumber);
// console.log(num.length);

//other
// console.log(numbers.filter(a => a % 10 === 3).length)

// --------------- array icerisinde cut eded varmi -----------------

// let numbers = [1, 3, 4, 7];
// console.log(numbers.some(a => a % 2 === 0))

// ---------------  array icerisinde tam ededlerin cemini tapin ------------

// let numbers = [4, 6, 8.5, 9, 7];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 1 === 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

//other
// let arr = [6.3, 8, 2, 1.9, 9];
// console.log([arr.filter(a => a % 1 === 0)].reduce((acc, item) => acc + item))

// ------------- Istifadcinin daxil etdiyi say qeder daxil etdiyi ededi arraya yigin.-----------------

// let arr = [];
// let m = +prompt("eneter count");
// for (let i = 1; i <= m; i++) {
//   let n = +prompt("Enter numbers");
//   arr.push(n);
// }

// console.log(arr);

// ------------------ Array icerisinden en boyuk en kicik ededi tap ------------

// let arr = [4, 6, 2, 19, 7];

// let min = Math.min(...arr);
// let max = Math.max(...arr);
// console.log(`min: ${min}
// max:  ${max}`);

// ---------------- Funksiya ishlederek array icerisinden  mukemmel ededleri tap ---------------

// let numbers = [4, 6, 28, 9];
// const checkIsMukemmel = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//       sum += i;
//     }
//     if (sum === n) {
//       return true;
//     }
//   }
//   return false;
// };
// let mukemmel = numbers.filter(checkIsMukemmel);
// console.log(mukemmel);

// --------------- Daxil olunan say qeder daxil olunan m ve n ededleri arasinda
//random eded yaradib arraya yigin
//4 12 26
//[14,20,25,16]
//sonda ise onlarin cemini gosterin -----------------

// let arr = [];
// let min = 5;
// let max = 25;

// let m = +prompt("eneter count");
// for (let i = 1; i <= m; i++) {
//   let n = Math.floor(Math.random() * (max - min + 1) + min);
//   arr.push(n);
// }
// console.log(arr);

// let sum = 0;
// for (let j = 0; j < arr.length; j++) {
//   sum += arr[j];
// }
// console.log(sum);

// -------------  arraydaki ededlerin ededi ortasini tapin-----------

// let numbers = [4, 6, 8, 9, 7];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum / numbers.length);

// -----------arraydaki tam ededlerin ededi ortasi -------------------------

// let numbers = [4, 6, 8.5];
// let sum = 0;
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 1 === 0) {
//     sum += numbers[i];
//     count += 1;
//   }
// }
// console.log(sum / count);

// ! ---------- arraydaki sozlerden A herfi ile baslayanlarin sayi ------------

// let text = ["aydan", "nermin", "aida", "leyla"];
// const checkIsletter = (word) => {
//   if (word.at(0) == "a") {
//     return true;
//   }
//   return false;
// };
// let letter = text.filter(checkIsletter);
// console.log(letter.length);

// !---------------------Sözlərdən ibarət arrayı sözlərin uzunluğuna görə sıralayın.------------------------

// let arr = ["nermin", "orucova", "infsec.eng"];
// arr.sort(function (a, b) {
//   return b.length - a.length;
// });
// console.log(arr);

// -----------  Verilən arrayda təkrarlanan elementləri silin (hərəsindən 1i qalsın). [1,5,1,6,6,7]->[1,5,6,7]--------------
// let arr = ["love", "hope", "success", "love", "hope"];

// let uniqueitems = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });

// console.log(uniqueitems);

// -------------------- Verilən arrayda təkrarlanan elementləri göstərin. [1,5,1,6,6,7]->[1,6] --------------

// let arr = ["love", "hope", "success", "love", "hope"];

// let sameitems = arr.filter((item, index) => {
//   return arr.indexOf(item) != index;
// });

// console.log(sameitems);

// ---------------- Daxil olunan ədədin daxilində neçə 7 olduğunu tapın (while döngüsü ilə) ----------------
// let number = +prompt("enter number");
// let result = 0;
// let n;
// while (number > 0) {
//   n = number % 10;
//   number = Math.floor(number / 10);
//   if (n === 7) {
//     result++;
//   }
// }
// console.log(result);

// -------------- İstifadəçi 0 daxil edənədək daxil etdiyi ədədləri cəmləyin. 0 Daxil edildikdə cəmi göstərin -------------

// let number;
// let sum = 0;
// while (number !== 0) {
//   number = +prompt("enter number");
//   sum += number;
// }
// console.log(sum);

// ----------------- Verilən arrayı reverse metodu olmadan tərsinə çevirin. ---------------

// let numbers = [4, 6, 8, 9, 7];
// let newarr = [];
// for (i = numbers.length - 1; i >= 0; i--) {
//   newarr.push(numbers[i]);
// }
// console.log(newarr);

// ----------- Daxil edilən ədədə görə Fibonaççi sırasını çap edin.
// Məsələn -> 9
// 0 1 1 2 3 5 8 13 21---------------

// let num = +prompt("Enter numbers");

// let a = 0;
// let b = 1;
// let c;
// let arry = [0, 1];
// for (let i = 1; i <= num - 2; i++) {
//   c = a + b;
//   arry.push(c);
//   a = b;
//   b = c;
// }
// console.log(arry);

// ---------------------- a ile baslayan elementler ----------

// let text = ["aydan", "nermin", "aida", "leyla"];
// const checkIsletter = (word) => {
//   if (word.at(0) == "a") {
//     return true;
//   }
//   return false;
// };
// let letter = text.filter(checkIsletter);
// console.log(letter.length);

// ---------- Daxil olunan ədədi hansı 3 ədədin cəmi kimi göstərmək olar ?
// Nümunə: 5 daxil olunarsa
// 1 1 3
// 1 2 2
// 1 3 1
// 2 1 2
// 2 2 1
// 3 1 1 ------------

// let n = +prompt("enter number");
// for (i = 1; i < n; i++) {
//   for (j = 1; j < n; j++) {
//     for (k = 1; k < n; k++) {
//       if (i + j + k === n) {
//         console.log(i, j, k);
//       }
//     }
//   }
// }
