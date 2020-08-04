/*The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []*/

function sumDigPow(a, b) {
  const result = [];
  for (let i = a; i < b; i++) {
    let sum = 0;
    i.toString()
      .split("")
      .forEach((element, index) => {
        sum = sum + Math.pow(parseInt(element), index + 1);
      });
    if (sum === i) {
      result.push(i);
    }
  }
  return result;
}
// console.log(sumDigPow(10, 100));
// console.log(sumDigPow(1, 10));
// Test.describe("Example Tests", function() {
//   Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
//   Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
//   Test.assertSimilar(sumDigPow(10, 100),  [89])
//   Test.assertSimilar(sumDigPow(90, 100), [])
//   Test.assertSimilar(sumDigPow(90, 150), [135])
//   Test.assertSimilar(sumDigPow(50, 150), [89, 135])
//   Test.assertSimilar(sumDigPow(10, 150), [89, 135])
// });
