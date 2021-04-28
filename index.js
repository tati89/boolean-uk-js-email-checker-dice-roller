// Email checker
const emails = [
  "blabla@gmail.com",
  "hello@gmail.com",
  "prola@gmail.com",
  "boolean@gmail.com",
];
const userEmail = prompt("What is your email? ");
let found = false;

for (const email of emails) {
  if (email === userEmail) {
    found = true;
    break;
  }
}

if (found === true) {
  alert("Access granted");
} else {
  alert("Access denied");
}

// Dice roller
/*
- Generate a random number from 1 to 6, for both the player and the computer
- Determine the winner, based on who gets the highest score and let the user know
- Make it a best of 5!
*/

alert("Let's play!");
userNumbers = [];
computerNumbers = [];
totalUser = 0;
totalComputer = 0;
for (let i = 1; i <= 5; i++) {
  userNumbers.push(Math.floor(Math.random() * 6) + 1);
  computerNumbers.push(Math.floor(Math.random() * 6) + 1);
}

// Sum numbers
for (const number of userNumbers) {
  console.log(number);
  totalUser = totalUser + number;
}

for (const number of computerNumbers) {
  totalComputer = totalComputer + number;
}

// check the score
if (totalUser > totalComputer) {
  alert(`You won! 
    Your score: ${totalUser}
    Computer score: ${totalComputer}`);
} else if (totalComputer > totalUser) {
  alert(`You lose! 
    Your score: ${totalUser}
    Computer score: ${totalComputer}`);
} else {
  alert(`Tie!`);
}
