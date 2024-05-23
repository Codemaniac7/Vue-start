// 구구단
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + "*" + j + "=" + j * i);
  }
}

// 구구단인데 홀수만
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j = j + 2) {
    console.log(i + "*" + j + "=" + j * i);
  }
}
