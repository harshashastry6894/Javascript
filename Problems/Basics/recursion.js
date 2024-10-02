// print(1, 10);
// console.log(sum(3));
// console.log(factorial(3));
// console.log(reverseArray([1, 2, 3, 4], 0, 3));
// console.log(reverseArray("harsha", 0, 3));
// console.log(fibonacci(8));
const print = (i, n) => {
  if (i > n) return;
  console.log(i);
  print(i + 1, n);
};

const sum = (n) => {
  if (n === 0) return 0;
  return n + sum(n - 1);
};

const factorial = (n) => {
  if (n === 0) return 1; // while product return 1 otherwise everything will become zero
  return n * factorial(n - 1);
};

const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const reverseArray = (arr, start, end) => {
  if (start < end) {
    const temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    reverseArray(arr, start + 1, end - 1);
  }
  return arr;
};

const reverseStringIterative = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};