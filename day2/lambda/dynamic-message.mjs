export const handler = async (event) => {
  // Define an array of random messages
  const messages = [
      "Have a great day!",
      "Keep pushing forward!",
      "Believe in yourself!",
      "Success is just around the corner!",
      "Stay positive and keep learning!",
      "You're doing amazing work!",
      "Every day is a new opportunity!",
      "Never stop dreaming!"
  ];

  // Select a random message from the array
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: randomMessage }),
  };
};
