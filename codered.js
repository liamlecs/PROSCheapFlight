function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  var emailInput = document.getElementById('email');
  var email = emailInput.value.trim();

  if (!isValidEmail(email)) {
      event.preventDefault(); // Prevent form submission
      alert('Invalid email address!');
      emailInput.focus(); // Set focus back to the email input field
  }
  else if(isValidEmail(email)) {
    alert('Email sent successfully!')
  }
});

function isValidEmail(email) {
  // Basic email validation using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayFlightTicket() {
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const d_date = document.getElementById("d-date").value;
  const r_date = document.getElementById("r-date").value;
  if (origin.trim() === "" || destination.trim() === "" || d_date.trim() === "" || r_date.trim() == "") {
    alert("Please finish the flight ticket information form.");
  }
  else { 
  alert(`Here are your flight tickets information:\nFrom ${origin} to ${destination} departing on ${d_date} and returning on ${r_date}:`);
  }
}
