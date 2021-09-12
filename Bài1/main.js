const submitInput = document.querySelector(".submit-input");
const result = document.querySelector(".result");

submitInput.addEventListener("click", handelSunmitInput);
const Arrkq = [];
let max = 0;

function handelSunmitInput() {
  const valueInput = document.querySelector('input[name="input-number"]').value;
  const numberArr = valueInput.split(";");
  numberArr.forEach((value) => {
    Arrkq.push(Number(value));
  });
  console.log(Arrkq);
  function adjacentElementsProduct() {
    Arrkq.forEach((value, index, arr) => {
      if (index < Arrkq.length) {
        if (arr[index] * arr[index + 1] > max) {
          max = arr[index] * arr[index + 1];
        }
      }
    });
    console.log(max);
  }
  adjacentElementsProduct(Arrkq);
  result.innerHTML = `Tích của 2 số lớn nhát trong mảng là ${max}`;
}
