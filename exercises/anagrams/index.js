// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//my solution
// function anagrams(stringA, stringB) {
//     //string normalization using regex
//     const normalizedA = stringA.replace(/[^\w]/g,'').toLowerCase();
//     const normalizedB = stringB.replace(/[^\w]/g,'').toLowerCase();

//     const charMapA = {};
//     const charMapB = {};

//     for (let char of normalizedA) {
//         charMapA[char] = charMapA[char] + 1 || 1;
//     }

//     for (let char of normalizedB) {
//         charMapB[char] = charMapB[char] + 1 || 1;
//     }

//     //create an array containing arrays sorted by the character value
//     const descA = Object.entries(charMapA).sort((a, b) => {
//         if (b[0] > a[0]) {
//             return 1;
//         }

//         if (b[0] < a[0]) {
//             return -1;
//         }

//         return 0;
//     });
//     const descB = Object.entries(charMapB).sort((a, b) => {
//         if (b[0] > a[0]) {
//             return 1;
//         }

//         if (b[0] < a[0]) {
//             return -1;
//         }

//         return 0;
//     });

//     console.log(descA);
//     console.log(descB);

//     return descA.toString() === descB.toString();
// }

//stephen's solution #1

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// //helper normalize and char map function
// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

//stephen's solution #2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
