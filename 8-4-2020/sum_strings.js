// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

const sumStrings = (a, b) => {
  lenA = a.length;
  lenB = b.length;
  if (lenA === lenB) {
  } else if (lenA > lenB) {
    diff = lenA - lenB;
    for (let i = 0; i < diff; i++) {
      b = "0" + b;
    }
  } else {
    diff = lenB - lenA;
    for (let i = 0; i < diff; i++) {
      a = "0" + a;
    }
  }
  lenA = a.length;
  lenB = b.length;

  let carryIn = 0;
  let addition = [];

  for (let i = lenA - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carryIn;
    if (sum >= 10) {
      carryIn = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carryIn = 0;
    }
    addition.unshift(sum);
  }

  if (carryIn !== 0) {
    addition.unshift(carryIn);
  }
  if (addition[0] === 0) {
    addition.shift();
  }
  return addition.join("");
};

// console.log(
//   sumStrings("96033260683422168680437782107", "318591966225383001860440892485")
// );
// sumStrings("123", "456");
//console.log(sumStrings("800", "9567"));

//console.log(a());

//414625226908805170540878674592
//console.log(sumStrings("123", "456"));

//Test.assertEquals(sumStrings('123','456'),'579')
