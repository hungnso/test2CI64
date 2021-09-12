const reducer = (accumulator, currentValue) => accumulator + currentValue;
const arrInput = [60, 40, 55, 75, 64];
let row1 = [];
let row2 = [];
let sum = [];
function alternatingSums(a) {
  a.forEach((value, index) => {
    if (index % 2 === 0) {
      row1.push(value);
    } else {
      row2.push(value);
    }
  });
  sum.push(row1.reduce(reducer, 0));
  sum.push(row2.reduce(reducer, 0));
}

alternatingSums(arrInput);
console.log(`Kq la [${sum}]`);
