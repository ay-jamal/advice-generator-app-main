const btn = document.querySelector(".btn");
const textId = document.querySelector(".adviceId");
const textContent = document.querySelector(".text-content");

AdviceFetch();

// Function to Fetch Advice Fromt the API
function AdviceFetch() {
  btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //data from the API
        textId.innerHTML = data.slip.id;
        textContent.innerHTML = data.slip.advice;
      });
  });
}
