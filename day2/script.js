// Day 2 DSA + JavaScript


// find the sum of the array

let arr = [5,4,3,2,1];


// using normal function

function findSum(arr){
   let sum = 0;
   for(let i = 0; i<arr.length; i++){
      sum = sum + arr[i];
   }
   return sum;
}

const result = findSum(arr);
console.log(result);

// using reduce method find the sum 

const output = arr.reduce(function (acc, curr){
    acc = acc + curr; 
    return acc;
}, 0)

console.log(output);

// next question - find max value isside the same array
function findMax(arr){
    let max = 0;
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] > max){
              max = arr[i];
        }
    }
    return max;
}
const result1 = findMax(arr);
console.log(result1);

// now writing the same using reduce 

const result2 = arr.reduce(function(max, curr) {
 if(curr > max){
    max = curr;
 }
 return max;
}, 0)
console.log(result2)

// next example - 

const users = [
    {firstName: 'shivam', lastName: 'kapsa', age: 26},
    {firstName: 'jacks', lastName: 'will', age: 36},
    {firstName: 'hardik', lastName: 'pandya', age: 46},
    {firstName: 'virat', lastName: 'kohli', age: 26},
];

// find out list of full names of all users

const respose = users.map(x => x.firstName + " " +  x.lastName);
console.log(respose);

// {26: 2, 36: 1, 46: 1} 

const resp = users.reduce(function(acc, curr){
     if(acc[curr.age]){
          acc[curr.age] = ++acc[curr.age];
     } else{
        acc[curr.age] = 1
     }
     return acc;
}, {})

console.log(resp);

// find out people where age < 30  , first name 

const res = users.filter(x => x.age < 30 ).map(x => x.firstName)
console.log(res);