function curriedSum(numArgs) {
  let numbers = [];

  return function _curriedSum(num) {
    // debugger
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((total, elements) => total + elements, 0);
    } else {
      return _curriedSum;
    }
  }
}

// let sum = curriedSum(3);
// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(3));

// Function.prototype.curry = function (numArgs) {
//   let args = [];
//   let that = this;

//   return function _curry(num) {
//     args.push(num)

//     if (args.length === numArgs) {
//       return that(...args);
//     } else {
//       return _curry;
//     }
//   }
// }

Function.prototype.curry = function (numArgs) {
  let args = [];
  let that = this;

  return function _curry(num) {
    args.push(num)

    if (args.length === numArgs) {
      return that.apply(that, args);
    } else {
      return _curry;
    }
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

let func = sumThree.curry(3);

console.log(func(1));
console.log(func(2));
console.log(func(3));