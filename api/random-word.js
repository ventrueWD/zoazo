const fs = require('fs');
const path = require('path');

function getRandomWordFromFile() {
  // Get the current script file directory
  const scriptDirectory = path.dirname(__filename);

  // Construct the file path for "words.txt"
  const filePath = path.join(scriptDirectory, 'words.txt');

  // Read the contents of the file
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Split the file contents into an array of words
  const words = fileContents.split('\n');

  // Remove any empty or whitespace-only words
  const filteredWords = words.filter((word) => word.trim() !== '');

  // Remove words with less than three letters
  const filteredWordsWithThreeLetters = filteredWords.filter((word) => word.length >= 3);

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * filteredWordsWithThreeLetters.length);

  // Retrieve the random word
  const randomWord = filteredWordsWithThreeLetters[randomIndex];

  return randomWord;
}

module.exports = (req, res) => {
  const word = getRandomWordFromFile();
  res.json({ word });
};
