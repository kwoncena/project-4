// Function to fetch weather conditions from JSON file
async function fetchWeatherConditions() {
  try {
    const response = await fetch('weather_conditions.json');
    const data = await response.json();
    return data.conditions;
  } catch (error) {
    console.error('Error fetching weather conditions:', error);
    return [];
  }
}

// Function to display weather conditions
async function displayWeatherConditions() {
  const conditionList = document.getElementById("conditionList");

  // Clear existing list items
  conditionList.innerHTML = "";

  // Fetch weather conditions from JSON file
  const weatherConditions = await fetchWeatherConditions();

  // Loop through weather conditions and create list items
  weatherConditions.forEach(condition => {
    const listItem = document.createElement("li");
    listItem.textContent = condition;
    conditionList.appendChild(listItem);
  });
}

// Function to fetch divination message based on weather condition
async function getWeatherMessage() {
  const weatherInput = document.getElementById("weatherInput").value;
  const messageContainer = document.getElementById("messageContainer");

  // Fetch divination message based on weather condition
  try {
    const response = await fetch('divination_messages.json');
    const data = await response.json();
    const message = data[weatherInput] || "No divination message available for this weather condition.";
    messageContainer.textContent = message;
  } catch (error) {
    console.error('Error fetching divination messages:', error);
    messageContainer.textContent = "Failed to fetch divination message.";
  }
}

// Call the function to display weather conditions when the page loads
window.onload = displayWeatherConditions;
