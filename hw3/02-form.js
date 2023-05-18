var form = document.getElementById("mainForm");
const inputFields = form.querySelectorAll("input");
inputFields.forEach((input) => {
  input.addEventListener("onBlur", () => {
    if (isFormValid()) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "disabled");
    }
  });
});

function isFormValid() {
  let isValid = true;
  let radioSelected = false;

  inputFields.forEach((input) => {
    if (input.type == "radio") {
      if (input.checked) {
        radioSelected = true;
      }
    } else if (input.value.trim() === "") {
      isValid = false;
    }
  });
  isValid = isValid && radioSelected;
  return isValid;
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Print user input to the console
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var dobDate = new Date(dob.split("-"));
  var stringDobDate = dobDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  var pronouns = document.querySelector('input[name="pronouns"]:checked').value;

  console.log("========= Form Submission =========");
  console.log("Name:", name);
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Date of Birth:", stringDobDate);
  console.log("Preferred Pronouns:", pronouns);
}
