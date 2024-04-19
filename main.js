// Function to fetch weather data from JSON file and display divination message
function getWeatherMessage() {
  const weatherInput = document.getElementById('weatherInput').value;
  fetch('weather_data.json')
    .then(response => response.json())
    .then(data => {
      const conditions = data.conditions;
      const message = generateDivinationMessage(conditions, weatherInput);
      displayMessage(message);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      displayMessage('Error: Could not retrieve weather data. Please try again.');
    });
}

// Function to generate divination message based on weather input
function generateDivinationMessage(conditions, weatherInput) {
  const normalizedInput = weatherInput.trim().toLowerCase();
  const matchingConditions = conditions.filter(condition => condition.toLowerCase().includes(normalizedInput));
  if (matchingConditions.length > 0) {
    return `The weather condition "${normalizedInput}" suggests ${getRandomMessage()}`;
  } else {
    return 'No matching weather condition found. Please try a different input.';
  }
}

// Function to generate a random divination message
function getRandomMessage() {
  const messages = [
    'a time of reflection and introspection.',
    'an opportunity for growth and change.',
    'a period of transformation and renewal.',
    'a sign of unexpected blessings and opportunities.',
    'a reminder to embrace uncertainty and adaptability.'
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// Function to display divination message on the page
function displayMessage(message) {
  const messageContainer = document.getElementById('messageContainer');
  messageContainer.textContent = message;
}
