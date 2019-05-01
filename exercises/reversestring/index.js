// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//--- Debug:
//place a debugger inside the function
//comment out the function call below
//reverse('abcd');
//and finaly cd to the reversestring 'cd reversestring/' directory and run 'node inspect index.js'
//type c or continue to continue the execution inside the terminal
//type repl to debug the function from within the terminal

//my solution
// function reverse(str) {
//     const strArray = str.split('').reverse();

//     return strArray.join('');
// }

//Stephen's solution #1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

//Stephen's solution #2
// function reverse(str) {
//     let reversed = '';
    
//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

//Stephen's solution #3
function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
