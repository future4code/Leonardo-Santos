// Exercício 1a

const printNumbers = (n: number) => {
  if (n >= 0) {
    printNumbers(n - 1);
    console.log(n);
  }
};

// Exercício 1b

const printNumbersB = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbersB(n - 1);
  }
};

// Exercício 2

export const calculateSumTo = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSumTo(n - 1, acc + n);
};

console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));

// Exercício 3

export const calculateSumTo2 = (n: number): number => {
  var sum = 0
	for (var i = 0 ; i <= n ; i++) {
        sum += i;
  }
	return sum;
};	
console.log(calculateSumTo2(3));
console.log(calculateSumTo2(10));
console.log(calculateSumTo2(100));

// Exercício 4

export const printArray = (arr: number[], i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1);
    console.log(`Elemento ${i}: `, arr[i]);
  }
};

const array = [1, 2, 3, 4];
printArray(array);