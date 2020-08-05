// Task
// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

// 1      I
// 5      V
// 10     X
// 50     L
// 100    C
// 500    D
// 1000   M

const romans = {
  "1": "I",
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII",
  "9": "IX",
  "10": "X",
  "20": "XX",
  "30": "XXX",
  "40": "XL",
  "50": "L",
  "60": "LX",
  "70": "LXX",
  "80": "LXXX",
  "90": "XC",
  "100": "C",
  "200": "CC",
  "300": "CCC",
  "400": "CD",
  "500": "D",
  "600": "DC",
  "700": "DCC",
  "800": "DCCC",
  "900": "CM",
  "1000": "M",
  "2000": "MM",
  "3000": "MMM",
};
class RomanNumerals {
  static toRoman(number) {
    if (number > 10) {
      const digits = [];
      number = number.toString();
      for (let i = 0; i < number.length; i++) {
        digits.push(
          parseInt(number.charAt(i)) * Math.pow(10, number.length - 1 - i)
        );
      }
      return digits.map((digit) => romans[digit]).join("");
    }
    return romans[number.toString()];
  }

  static fromRoman(romanNumeral) {
    romanNumeral = romanNumeral.split("");

    let nums = romanNumeral.map((rn) =>
      parseInt(Object.keys(romans).find((key) => romans[key] === rn))
    );
    let num = nums[0];
    nums.shift();
    while (nums.length > 0) {
      let nextNum = nums[0];
      if (nums[0] > num) {
        num = nextNum - num;
      } else {
        num = nextNum + num;
      }
      nums.shift();
    }
    return num;
  }
}

console.log(RomanNumerals.toRoman(4));
console.log(RomanNumerals.fromRoman("MMVII"));
// Test.assertEquals(RomanNumerals.toRoman(1000), 'M')
// Test.assertEquals(RomanNumerals.toRoman(999), "CMXCIX")
// Test.assertEquals(RomanNumerals.toRoman(4), 'IV')
// Test.assertEquals(RomanNumerals.toRoman(1), 'I')
// Test.assertEquals(RomanNumerals.toRoman(1991), 'MCMXCI')
// Test.assertEquals(RomanNumerals.toRoman(2006), 'MMVI')
// Test.assertEquals(RomanNumerals.toRoman(2020), 'MMXX')

// Test.assertEquals(RomanNumerals.fromRoman('XXI'), 21)
// Test.assertEquals(RomanNumerals.fromRoman('I'), 1)
// Test.assertEquals(RomanNumerals.fromRoman('III'), 3)
// Test.assertEquals(RomanNumerals.fromRoman('IV'), 4)
// Test.assertEquals(RomanNumerals.fromRoman('MMVII'), 2007)
// Test.assertEquals(RomanNumerals.fromRoman('MDCLXIX'), 1669)
