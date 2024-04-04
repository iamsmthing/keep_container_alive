import fetch from 'node-fetch';

// Define the API endpoint URL
const apiUrl = 'https://skillgpt-be.onrender.com/hello';

// Function to fetch the API endpoint
const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log('Data fetched successfully:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

// Fetch data initially
fetchData();

// Fetch data every 10 minutes indefinitely
setInterval(fetchData, 10 * 60 * 1000);
// setInterval(fetchData, 10 * 1000);
