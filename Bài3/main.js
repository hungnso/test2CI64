const btn = document.querySelectorAll(".btn");

function removeClass(a) {
  a.forEach((element) => {
    element.classList.remove("active");
  });
}

btn.forEach((element, e) => {
  element.addEventListener("click", () => {
    removeClass(btn);
    element.classList.add("active");
  });
});

const result = document.querySelector(".result");

function callApi(url) {
  console.log(url);
  fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.result);
      const linkUse = document.querySelector(".active").dataset.id;
      console.log(linkUse);
      result.innerHTML = data.result[linkUse];
    })
    .catch((err) => {
      console.log(err);
    });
}
callApi();

const btnSubmit = document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", () => {
  const inputValue = document.querySelector('input[name="value"]').value;
  callApi(inputValue);
});

// function callApi() {
//   fetch("https://api.shrtco.de/v2/shorten")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
// callApi();
