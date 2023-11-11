//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//The lowest number will not always come first.

//sumAll([1, 4])  // should return a number.
////sumAll([1, 4])  // should return 10.
///sumAll([4, 1])  // should return 10.
//sumAll([5, 10])  // should return 45.

// declare sumAll( function ) that take array as a parameter and return sum of the range between the two elements in array
// if statment to check the min value in array
// if statment to check the max value in array
//define var sumRange =0
//for loop inside the range between the two numbers
// return the sumRange
//call the function


function sumAll(arr) {
    let min = arr[0] <arr[1]? arr[0]:arr[1];
    let max = arr[0] >arr[1]? arr[0]:arr[1];
    let sumRange= 0;
    for (let index = min; index <= max; index++) {
        sumRange += index;
        
    }
    return sumRange;

 }
 let array= [4, 1];
 console.log(sumAll(array));