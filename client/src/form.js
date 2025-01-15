import "./style.css";
import "./mediaQueries.css";

//Select the form from the DOM
const messageForm = document.querySelector("#messageForm");
//We need to build an event that handles the data from the form
messageForm.addEventListener("submit", handleSubmitMessageForm);

function handleSubmitMessageForm(event) {
  event.preventDefault();
  const formData = new FormData(messageForm);
  const formValues = Object.fromEntries(formData);

  fetch("/new-data ", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  console.log(formValues);
  alert("message sent successfully");
}

//The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM
//select the testimonial containerexample like below
const messageContainer = document.getElementById("testimonialSection");

const fetchDataArray = [];

async function fetchFormData() {
  const response = await fetch("server url/ example messages", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  // Parsing the response
  const data = await response.json();

  //log to see the data array
  console.log(data);

  //fetch the data and put i
  fetchDataArray.length = 0;
  data.forEach(savingIntoThisObject);
  function savingIntoThisObject(dataArraymessages) {
    fetchDataArray.push(dataArraymessages);
  }

  fetchDataArray.length = 4;
  console.log(fetchDataArray);

  return fetchDataArray;
}

async function creatingElements() {
  const SavedData = await fetchFormData();
  console.log(SavedData);

  SavedData.forEach((singledata) => {
    const userDiv = document.createElement("div");
    userDiv.className = "UserDiv";

    const messageInput = document.createElement("p");

    messageInput.textContent = `" ${singledata.message}"`;
    messageInput.className = "message";

    const userName = document.createElement("p");
    userName.textContent = singledata.name;

    userDiv.appendChild(messageInput);
    userDiv.appendChild(userName);

    messageContainer.appendChild(userDiv);
  });
}
creatingElements();
