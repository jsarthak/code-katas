/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
*/

// Divide the number by 5, to find out how much 5 factors are present, then,
// Divide the number by 25 to find out how many times 25 are present in a number as it will add extra 5 to number then,
// Divide the number by 125 to find out how many times 125 are present in a number as it will add extra 5 to number and so on.

function zeros(n) {
  let count = 0;
  if (n > 1) {
    for (let i = 5; n / i > 0; i = i * 5) {
      count = count + Math.floor(n / i);
    }
  }
  return count;
}
// console.log(zeros(30));
// console.log(zeros(20));
// console.log(zeros(1000));
// console.log(zeros(10000));
// console.log(zeros(0));
// console.log(zeros(1));
// console.log(zeros(5));
// console.log(zeros(6));
// Test.describe("Sample Tests", function() {
//   Test.it("Should pass sample tests", function() {
//     Test.assertEquals(zeros(0), 0, "Testing with n = 0")
//     Test.assertEquals(zeros(5), 1, "Testing with n = 5")
//     Test.assertEquals(zeros(6), 1, "Testing with n = 6")
//     Test.assertEquals(zeros(30), 7, "Testing with n = 30")
//   });
// });
