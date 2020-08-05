// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
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
}

console.log(add("123", "456"));

// describe("Add two numbers", function(){
//   it("should pass basic tests", function() {
//     Test.assertEquals(add("1", "1"), "2");
//     Test.assertEquals(add("123", "456"), "579");
//     Test.assertEquals(add("888", "222"), "1110");
//     Test.assertEquals(add("1372", "69"), "1441");
//     Test.assertEquals(add("12", "456"), "468");
//     Test.assertEquals(add("101", "100"), "201");
//     Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
//   });
// });
