import "./style.css";
import "./mediaQueries.css";

//Select the form from the DOM
const messageForm = document.querySelector("#messageForm");
//We need to build an event that handles the data from the form
messageForm.addEventListener("submit", handleSubmitMessageForm);

function handleSubmitMessageForm(event) {
  event.preventDefault();

  const submitButton = event.target.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  const formData = new FormData(messageForm);
  const formValues = Object.fromEntries(formData);

  fetch("http://localhost:8080/new-data ", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  console.log(formValues);
  alert("message sent successfully");

  submitButton.disabled = false;
  // Refreshing  page after successful form submission
  location.reload();

  if (!response.ok) {
    console.log("Failed to send message");
    alert("An error occurred while sending the message.");
  }
}

//The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM
//select the testimonial containerexample like below
const messageContainer = document.getElementById("testimonialSection");

async function fetchFormData() {
  //here i'll later changed to render url
  const response = await fetch("http://localhost:8080/messages", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  // Parsing the response
  const data = await response.json();

  //log to see the data array
  console.log(data);

  const lastFourMessages = data.slice(-4);
  return lastFourMessages;
}

async function creatingElements() {
  const SavedData = await fetchFormData();

  //clearing previous content
  messageContainer.innerHTML = "";

  SavedData.forEach((singledata) => {
    const userDiv = document.createElement("div");
    userDiv.className = "UserDiv";

    const messageInput = document.createElement("p");

    messageInput.textContent = `" ${singledata.message}"`;
    messageInput.className = "message";

    const userName = document.createElement("p");
    userName.textContent = singledata.user_name;

    userDiv.appendChild(messageInput);
    userDiv.appendChild(userName);

    messageContainer.appendChild(userDiv);
  });
}
creatingElements();
