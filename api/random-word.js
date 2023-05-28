const fs = require('fs');
const path = require('path');

function getRandomWordFromFile() {
  // Get the current script file directory
  const scriptDirectory = path.dirname(__filename);

  // Construct the file path for "words.txt"
  const filePath = path.join(scriptDirectory, '../words.txt'); // Assuming words.txt is in the parent directory

  // Read the contents of the file
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Split the file contents into an array of words
  const words = fileContents.split('\n');

  // Remove any empty or whitespace-only words
  const filteredWords = words.filter((word) => word.trim() !== '');

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * filteredWords.length);

  // Retrieve the random word
  const randomWord = filteredWords[randomIndex];

  // Truncate the word to a specific character limit
  const truncatedWord = randomWord.substring(0, 50); // Adjust the character limit as needed

  return truncatedWord;
}

module.exports = (req, res) => {
  const word = getRandomWordFromFile();
  res.status(200).send(word);
};
