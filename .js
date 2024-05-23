const price = ["2000", "1000", "3000", "5000", "4000"];

const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  return priceList
    .filter(isOverOneThousand) //filter 원하는 조건에 맞는 배열 리스트 만들기
    .sort(ascendingList) // sort 정렬
    .map(suffixWon); // 배열 요소들을 다시 정리
}

const result = getWonPrice(price);

console.log(result);
