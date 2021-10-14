const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const dateMeeting = document.getElementById("dateMeeting");
const addComments = document.getElementById("addComments");
const submitButton = document.getElementById("submitButton");
const formWrapper = document.getElementById("formWrapper");

const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

submitButton.addEventListener("click", (event) => {
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    dateMeeting.value == "" ||
    phoneNumber.value == ""
  ) {
    event.preventDefault();
   
  } else {
    event.preventDefault();
    alert(
      `Thank you, ${firstName.value}! Our appointment has been schedule to ${dateMeeting.value}`
    );
  }
});