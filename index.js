const form = document.getElementById("user-form");
const name = document.getElementById("name");
const age = document.getElementById("age");

const hidden = document.getElementById("section-hidden");
const formArea = document.getElementById("form-section");

const greetings = document.getElementById("greetings");
const ageMonths = document.getElementById("ageMonths");
const ageMessage = document.getElementById("ageMessage");
const quotes = document.getElementById("quotes");

function section() {
    formArea.hidden = true;
    hidden.hidden = false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Form submitted");

  console.log(name.value);
  console.log(age.value);

  localStorage.setItem("name", name.value);
  localStorage.setItem("age", age.value);

  const savedName = localStorage.getItem("name");
  const savedAge = localStorage.getItem("age");

  greetings.textContent = `Hello, ${savedName}!`;
  ageMonths.textContent = `You are ${savedAge * 12} months old.`;

  if (savedAge >= 18) {
    ageMessage.textContent = "You are an adult.";
  } else {
    ageMessage.textContent = "You are still young. Keep learning!";
  }

  quotes.textContent = "Believe in yourself and keep going!";

  section();
});
document.getElementById("Edit-button").addEventListener("click", function () {
  hidden.hidden = true;
  formArea.hidden = false;
});






     


  
