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


// we have to solve 2nd one - find smallest 

// so here smallest value is 1 lets check its working or not ??

// yes its working fine. 1 is coming 

// thankyou for watching with us keep learning 

// function findSmallest(arr){
//     let smallest = Infinity;
//     for(let i = 0 ; i<arr.length; i++){
//          if(arr[i] < smallest){
//             smallest = arr[i];
//          }
//     }
//     return smallest;
// }

// const result = findSmallest(arr);
// console.log(result);

// let arr =  [1, 4, 3, 56, 88, 36, 906];

// function findSecondLargest(arr){
//     let firstLarget = -Infinity;
//     let secondLarget = -Infinity;
//     for(let i =  0 ; i<arr.length ; i++){
//            if(arr[i]> firstLarget){
//             secondLarget = firstLarget
//             firstLarget = arr[i]
//            } else if(arr[i]> secondLarget){
//             secondLarget = arr[i]
//            }


//     }
//     return secondLarget;
// }

// const res = findSecondLargest(arr);
// console.log(res);

// for(let i = 0 ; i<3 ; i++){
//     for(let j = 0 ; j<3 ; j++){
//         console.log('i',  i  + ' '  +  'j', j);
//     }
// }

// for(let i = 0; i<3; i++){
//     for(let j = 0; j<i ; j++){
//         console.log("I" , i + " " ,  "j" , j)
//     }
// }