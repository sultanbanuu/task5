////////////////////////// 1 /////////////////////////////

// const str = "We Are thE ChampioNs MY FriEndS"
// let result = 0;

// for (let i = 0; i < str.length; i++) {
//     if(str.charAt(i) === str.charAt(i).toUpperCase()) {
//         result += str.charAt(i).split(' ').join('').length;
//     }

// }

// console.log(result);

// const upperStr = str.replace(/[^A-Z]/g, '');

// console.log(upperStr.length);

////////////////////////// 2 /////////////////////////////

// 1st way

// function isPalindrome(str) {
//     const result = str.split('').reverse().join('');
//     if(str == result) {
//         console.log("it's palindrome");
//     } else {
//         console.log("it's not palindrome");
//     }
// }

// const palindromeStr = "racecar";
// const palindromeStr2 = "bicycle";

// isPalindrome(palindromeStr);
// isPalindrome(palindromeStr2);

// 2nd way

// function palindrome(str) {
//   let j = str.length - 1;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     j--;
//     console.log(str[j]);
//     console.log(str[i]);
//   }

//   return true;
// }

// function palindrome(str) {
//   let j = str.length - 1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     console.log(str[j]);
//     j--;
//   }
//   return true;
// }

// const palindromeStr = "madam";

// console.log(palindrome(palindromeStr));

////////////////////////// 3 /////////////////////////////

// function sumOfCounts(str) {
//   let sum = 0;
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str.charAt(i))) {
//       arr.push(str.charAt(i));
//       sum += Number(str[i]);
//     }
//   }
//   return sum;
// }

// const mixedStr = "23ref45bb";

// console.log(sumOfCounts(mixedStr));

////////////////////////// 4 /////////////////////////////

// function kebabToUpper(str) {
//   let result = str.toUpperCase();
//   return result;
// }

// const kebabStr = "kebab-case";

// console.log(kebabToUpper(kebabStr));

////////////////////////// 5 /////////////////////////////


// function reverseStr(str) {
//   let result = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     result.push(str[i]);
//   }

//   return result;
// }


// const randomStr = 'Helou';
// console.log(reverseStr(randomStr));