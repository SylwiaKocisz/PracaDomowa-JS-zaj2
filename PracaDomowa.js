// 1)	Write a program that automatically converts English text to Morse code and vice versa.

// const morseCodeMap = {
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",
//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".--.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",
//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-",
//     " ": " "
// };

// var ulits = (function () {
//     function swap(json) { //odwrocenie obektu, zeby z kodu morsa tłumaczyło na angielski( zeby nie pisać drugi raz tablicy)
//         var ret = {};
//         for (var key in json) {
//             ret[json[key]] = key;
//         }
//         return ret;
//     }

//     return {
//         swap
//     };
// })();

// class UnitConverter {
//     constructor(convertCodeMap, reverseConvertCodeMap) { //dostaje mape i odwrócona mape
//         this.convertCodeMap = convertCodeMap;
//         this.reverseConvertCodeMap = reverseConvertCodeMap;
//     }

//     Convert(char) {//przy urzyciu mapy zwraca przetlumaczona wartosc
//         return this.convertCodeMap[char];
//     }

//     Unconvert(char) {//przetlumacza za pomocą odwróconej mapy
//         return this.reverseConvertCodeMap[char];
//     }
// }

// class SetsConverter {
//     constructor(convert, unconvert) {
//         this.convert = convert;
//         this.unconvert = unconvert;
//     }

//     ConvertString(text) {
//         return text
//             .toLowerCase()
//             .split("")
//             .map(this.convert);
//     }

//     UnconvertArray(array) {
//         return array.map(this.unconvert).join("");
//     }
// }

// let unitConverter = new UnitConverter(morseCodeMap, ulits.swap(morseCodeMap));

// let setsConverter = new SetsConverter(
//     unitConverter.Convert.bind(unitConverter),//jezeli przekazujemy z innego obiektu, zeby nie zgubic this z konstruktora dodaje bind
//     unitConverter.Unconvert.bind(unitConverter)
// );

// let convertionResult = setsConverter.ConvertString("Minius");
// console.log(convertionResult);
// let unconversionResult = setsConverter.UnconvertArray(convertionResult);
// console.log(unconversionResult);

// 2)	Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.
// "use strict";

// class Palindromic {
//     constructor(word) {
//         this.word = word;
//     }

//     longest() {
//         let result = this.word.substr(0, 1);

//         for (let i = 0; i < this.word.length; i++) {
//             for (let j = i + 1; j <= this.word.length; j++) {
//                 let substract = this.word.substr(i, j);

//                 if (this.isPalindrom(substract) && substract.length > result.length) {
//                     result = substract;

//                 }
//             }
//         }

//         return result;
//     }

//     isPalindrom(e) {
//         return (
//             e.toLowerCase() ===
//             e
//                 .toLowerCase()
//                 .split("")
//                 .reverse()
//                 .join("")
//         );
//     }
// }

// const arr = ["karakis", "baerren", "kajak", "inni", "sedes", "kotoksen"];

// arr.forEach(string => {
//     let myPalindromic = new Palindromic(string);
//     console.log(string, "---the longest palindromic is--- " + myPalindromic.longest());
// });

// 3)	Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
// "use strict";

// class Substring {
//     constructor(string1, string2) {
//         this.string1 = string1;
//         this.string2 = string2;
//     }

//     common() {

//         let result = "";

//         for (let i = 0; i < this.string1.length; i++) {
//             for (let j = i + 1; j <= this.string1.length; j++) {
//                 let substring = this.string1.substr(i, j);

//                 if (substring.length > result.length && this.string2.includes(substring)) {
//                     result = substring;
//                 }
//             }
//         }

//         return result;
//     }
// }

// const word1 = "karol";
// const word2 = "rolki";

// const mySubstring = new Substring(word1, word2);
// const resultFinal = mySubstring.common();

// console.log("Substring of words " + word1 + " & " + word2 + " is: " + resultFinal);

// 4)	Write a code that multiplies two matrices together. Dimension validation required.


// "use strict";
// let first1 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// let second2 = [
//     [1, 4],
//     [2, 5],
//     [3, 6]
// ];
// class MatrixMultiplier {
//     constructor(first, second) {
//         this.first = first;
//         this.second = second;
//     }

//     multiply() {
//         if (this.first[0].length == this.second.length) {
//             let resultFinal = [];
//             let result = [];
//             let numberResult = 0;
//             let number;
//             for (let i = 0; i < this.first.length; i++) {
//                 for (let j = 0; j < this.second[0].length; j++) {
//                     for (let k = 0; k < this.second.length; k++) {
//                         number = this.first[i][k] * this.second[k][j];
//                         numberResult += number;
//                     }
//                     result.push(numberResult);
//                     numberResult = 0;
//                 }
//                 resultFinal.push(result);
//                 result = [];
//             }
//             console.log(resultFinal);
//         } else {
//             console.log("Wrong matric dimention");
//         }
//     }
// }

// const myMatrixMultiplier = new MatrixMultiplier(first1, second2);

// myMatrixMultiplier.multiply();


//[14, 32] 
//[32, 77]