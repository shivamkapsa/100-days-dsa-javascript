// DSA + JavaScript Practice




// 1 - Find Negative Count in an Array

console.log("1 - Find Negative Count in an Array");

let arr1 = [4, 0, 8, 30, 10, 15, -12, -6, -9];

function negCount(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }

  return count;
}

console.log(negCount(arr1));



// 2 - Search Element in an Array

console.log("2 - Search Element in an Array");

let arr2 = [4, 0, 8, 30, 10, 15];

function searchElement(num) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === num) {
      return true;
    }
  }

  return false;
}

console.log(searchElement(0));
console.log(searchElement(100));



// 3 - Find Even or Odd Numbers in an Array

console.log("3 - Find Even or Odd Numbers in an Array");

let arr3 = [10, 2, 3, 9, 12, 15, 2, 4];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i], "Even");
  } else {
    console.log(arr3[i], "Odd");
  }
}



// 4 - Find 2nd Largest Number in an Array

console.log("4 - Find 2nd Largest Number in an Array");

let arr4 = [2, 3, 4, 5, 4];

function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(findSecondLargest(arr4));



// 5 - Find Smallest Number in an Array

console.log("5 - Find Smallest Number in an Array");

let arr5 = [1, 4, 3, 56, 88, 36, 906];

function findSmallest(arr) {
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(findSmallest(arr5));



// 6 - Find Largest Number in an Array

console.log("6 - Find Largest Number in an Array");

function findLargest(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargest(arr5));



// 7 - Print Star Pattern

console.log("7 - Print Star Pattern");

function printStar(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row = row + "* ";
    }

    console.log(row);
  }
}

printStar(4);



// 8 - Reverse a String

console.log("8 - Reverse a String");

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
}

console.log(reverseString("javascript"));



// 9 - Check Palindrome

console.log("9 - Check Palindrome");

function checkPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed === str;
}

console.log(checkPalindrome("abccba"));
console.log(checkPalindrome("shivam"));



// 10 - Remove Duplicates from Sorted Array

console.log("10 - Remove Duplicates from Sorted Array");

let arr10 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }

  return x + 1;
}

console.log(removeDuplicates(arr10));




// End of Practice Questions
