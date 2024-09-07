function sumEvenNumbers(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {  
        sum += arr[i];
      }
    }
    
    return sum;
  }
  

  let arr = [1, 2, 3, 4, 5, 6];
  console.log(sumEvenNumbers(arr));  // Output: 12





  let num = 1;

do {
  if (num !== 5) {
    console.log(num);
  }
  num++;
} while (num <= 10);





function isPalindrome(str) {
   
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
  
    let reversedStr = cleanedStr.split('').reverse().join('');
    
  
    if (cleanedStr === reversedStr) {
      return `${str} is a palindrome.`;
    } else {
      return `${str} is not a palindrome.`;
    }
  }
  

  console.log(isPalindrome("mom"));      // Output: "mom is a palindrome."
  console.log(isPalindrome("father"));   // Output: "father is not a palindrome."




  let num1 = 10;

do {
  if (num % 2 === 0) {  
    console.log("Skipping even number");
  } else {
    console.log(num);
  }
  num--;
} while (num >= 1);






function printPattern() {
    let rows = 4;  
    let pattern = '';
  
    for (let i = 1; i <= rows; i++) {
   
      if (i % 2 === 1) {
        pattern = '*';
      } else {
        pattern = '*'.repeat(i);
      }
  
      console.log(pattern);
    }
  }

  printPattern();
  





  

  