/*The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

function tickets(peopleInLine) {
  const ticketPrice = 25;
  var bills = { hundred: 0, fifty: 0, twentyFive: 0 };
  var sold = [];
  peopleInLine.map((element) => {
    if (element === 25) {
      bills.twentyFive++;
      sold.push(true);
    } else if (element === 50 && bills.twentyFive > 0) {
      bills.twentyFive--;
      bills.fifty++;
      sold.push(true);
    } else if (element === 100) {
      if (bills.fifty > 0 && bills.twentyFive > 0) {
        bills.fifty--;
        bills.twentyFive--;
        sold.push(true);
      } else if (bills.fifty <= 0 && bills.twentyFive >= 3) {
        bills.twentyFive = bills.twentyFive - 3;
        sold.push(true);
      } else {
        sold.push(false);
      }
    } else {
      sold.push(false);
    }
  });
  return sold.filter((s) => s === false).length > 0 ? "NO" : "YES";
}
// console.log(tickets([25, 25, 50, 50]));
// console.log(tickets([25, 100]));
// Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
// Test.assertEquals(tickets([25, 100]), "NO");
