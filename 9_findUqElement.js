// program to merge and remove duplicate value from an array

function difference(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

     // loop through array
     for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return uniqueArr;
}

// calling the function
// passing array argument
console.log(difference([1, 2, 3], [100, 2, 1, 10]));