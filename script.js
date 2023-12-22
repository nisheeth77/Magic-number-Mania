const usedNumbers = []; // Array to store used numbers

document.getElementById('generateBtn').addEventListener('click', function() {
  const min = 1;
  const max = 1000;

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedNumbers.includes(randomNumber));

  usedNumbers.push(randomNumber);

  document.getElementById('result').innerText = `${randomNumber}`;

  if (usedNumbers.length === max - min + 1) {
    // Reset usedNumbers array if all numbers from min to max have been used
    usedNumbers.length = 0;
  }
});
