// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//my solution
// function reverseInt(n) {
//     if (n === 0) 
//         return 0;

//     const isNegative = n < 0;

//     let strNumber = n.toString();
//     strNumber = (!isNegative) ? strNumber : strNumber.slice((strNumber.indexOf('-') + 1), strNumber.length);

//     let reversed = '';

//     for (let character of strNumber) {
//         reversed = (character !== '0') ? character + reversed : reversed;
//     }

//     reversed = (!isNegative) ? reversed : '-' + reversed;

//     return parseInt(reversed);
// }

//Stephens solution
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    // if (n < 0) {
    //     return parseInt(reversed) * -1;
    // }

    // return parseInt(reversed);

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
