/* 
Magic Number
*/
// util.ts constants.ts
// export const COMMON_DELAY_MS = 3 * 60 * 1000;

// setTimeout(() => {
//   scrollToTop();
// }, COMMON_DELAY_MS);

// Numeric Operator

console.log(PRICE);

// Min, Max
getRandomPrice(PRICE.MIN, PRICE.MAX);

const CAR_NAME_LEN = Object.freeze({
  MIN: 1,
  MAX: 5,
});

function isValidName(name) {
  return (
    carName.length >= CAR_NAME_LEN.MIN && carName.length <= CAR_NAME_LEN.MAX
  );
}
