const btn = document.querySelector(".btn");
const textId = document.querySelector(".adviceId");
const text = document.querySelector(".text-content");

AdviceFetch();

function AdviceFetch() {
  btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.slip.id);
        console.log(data.slip.advice);

        textId.innerHTML = data.slip.id;
        text.innerHTML = data.slip.advice;
      });
  });
}
