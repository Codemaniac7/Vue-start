/* 
Array.length
*/

Array.prototype.clear = function () {
  this.length = 0;
};

function clearArray(array) {
  array.length = 0;

  return array;
}

const arr = [1, 2, 3];
// arr.clear();
clearArray(arr);

console.log(arr);
