// Extraction of a number is done by %
const countDigits = (num) => {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
};

const reverseNumber = (num) => {
  let rev = 0;
  while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    // Since diving by 10, we need to multiply by 10 to reverse it
    rev = rev * 10 + rem;
  }
  return rev;
};

const reverseString = (str)  => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const checkPalindrome = (num) => {
  return num === reverseNumber(num);
};

const printAllDivisor = (num) => {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) console.log(i);
  }
};

const isPrimeNumber = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  if (count === 2) {
    return "Prime number";
  } else {
    return "Not a prime number";
  }
};

const gcdorhcf = (n1, n2) => {
  const min = Math.min(n1, n2);
  for (let i = min; i >= 1; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
};

// console.log(countDigits(7789));
// console.log(reverseNumber(7789));
// console.log(checkPalindrome(7877));
// console.log(isPrimeNumber(8));
console.log(gcdorhcf(3, 12));
