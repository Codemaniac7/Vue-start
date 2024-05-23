/* 
map vs forEach
*/

const prices = ["1000", "2000", "3000"];

prices.forEach((price) => console.log(price + "원"));
prices.map((price) => console.log(price + "원"));

// const newPricesForEach = prices.forEach(function (price) {
//   return price + "원";
// });
// const newPricesMap = prices.map(function (price) {
//   return price + "원";
// });

// console.log(newPricesForEach);
// console.log(newPricesMap);
