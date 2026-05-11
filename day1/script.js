// DSA Practice Questions

// 1. Find the largest number in an array.
// Example:
// Input:  [1, 4, 3, 56, 88, 36]
// Output: 88


// 2. Find the smallest number in an array.
// Example:
// Input:  [1, 4, 3, 56, 88, 36]
// Output: 1


// 3. Find the second largest number in an array.
// Example:
// Input:  [1, 4, 3, 56, 88, 36]
// Output: 56

// solution 



let arr =  [1, 4, 3, 56, 88, 36, 906];

function findSmallest(arr){
    let smallest = Infinity;
    for(let i = 0 ; i<arr.length; i++){
         if(arr[i] < smallest){
            smallest = arr[i];
         }
    }
    return smallest;
}

const result1 = findSmallest(arr);
console.log(result1);


function findLargest(arr){
    let largest = -Infinity;
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i]> largest){
            largest = arr[i]
        }
    }
    return largest
}

const result2 = findLargest(arr);
console.log(result2);

function findSecondLargest(arr){
    let firstLarget = -Infinity;
    let secondLarget = -Infinity;
    for(let i =  0 ; i<arr.length ; i++){
           if(arr[i]> firstLarget){
            secondLarget = firstLarget
            firstLarget = arr[i]
           } else if(arr[i]> secondLarget){
            secondLarget = arr[i]
           }
    }
    return secondLarget;
}
const result3 = findSecondLargest(arr);
console.log(result3);

