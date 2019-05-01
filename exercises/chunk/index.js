// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//my solution
// function chunk(array, size) {
//     let arr = [];
//     let subarr = [];
//     let count = 1;

//     array.map((value, index) => {
//         subarr.push(value);

//         if (count === size) {
//             arr.push(subarr);
//             subarr = [];
//             count = 0;
//         }

//         if ((index == (array.length - 1) && subarr.length > 0)) {
//             arr.push(subarr);
//         }

//         count++;
//     });

//     return arr;
// }

//stephen's solution #1
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];

//         if(!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;
// }

//stephen's solution #2
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));

        index += size;
    }

    return chunked;
}

module.exports = chunk;
