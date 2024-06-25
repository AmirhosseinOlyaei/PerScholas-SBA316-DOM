// Cache elements
const userInputForm = document.getElementById("userForm");
const outputSection = document.getElementById("output");

// Event listener for form submission
userInputForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user input
  const userName = document.getElementById("name").value;

  // Create new elements
  const messageElement = document.createElement("p");

  // Modify content and style based on user input
  if (userName.trim() !== "") {
    messageElement.textContent = `Hello, ${userName}! Welcome to our app.`;
    messageElement.classList.add("success");
  } else {
    messageElement.textContent = "Please enter a valid name.";
    messageElement.classList.add("error");
  }

  // Clear previous output and append new message
  outputSection.innerHTML = "";
  outputSection.appendChild(messageElement);
});

// Part of BOM: Alert the user with the initial message
const toast = document.createElement("div");
toast.classList.add("toast");
toast.textContent = "Following you!";

document.addEventListener("mousemove", function (event) {
  toast.style.position = "fixed";
  toast.style.top = `${event.clientY + 10}px`;
  toast.style.left = `${event.clientX + 10}px`;
  document.body.appendChild(toast);
  setTimeout(function () {
    toast.remove();
  }, 4000);
});

document.addEventListener("mousemove", function (event) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${event.clientX}px`;
  star.style.top = `${event.clientY}px`;
  document.body.appendChild(star);

  // Remove star element after animation completes
  setTimeout(function () {
    star.remove();
  }, 1000); // Adjust timing as needed
});
