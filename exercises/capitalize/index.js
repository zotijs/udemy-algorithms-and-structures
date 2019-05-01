// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//my solution
// function capitalize(str) {
//     const strArray = str.split(' ');
//     const result = [];

//     strArray.map((value) => {
//         result.push(value[0].toUpperCase().concat(value.slice(1)));
//     });

//     return result.join(' ');
// }

//stephen's solution #1
function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

//stephens solution #2
// function capitalize(str) {
//     let result = str[0].toUpperCase();

//     for (let i = 1; i < str.length; i++) {
//         if (str[i - 1] === ' ') {
//             result += str[i].toUpperCase();
//         }
//         else {
//             result += str[i];
//         }
//     }

//     return result;
// }

module.exports = capitalize;
