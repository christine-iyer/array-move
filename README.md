# Array Practice.
[repl](https://replit.com/@chrisiyer/ARRAYS)


June 26, 2024
here is the code that I'm usingon repl

```javascript
// const num = [0, 1, 2, 3, 4, 5, 6];
// console.log(num.length);
// let arrNum = [];
// arrNum = num.pop();
// console.log(arrNum);
// arrNum = num.push(99);
// console.log(arrNum)
//  const animals = ['pigs', 'goats', 'sheep'];

console.log("1. Create an array");
const cards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
console.log("Starting Array = ", cards);

console.log(
  "2. Create a new variable called count that pushed M, X, Y, Z to cards",
);
let count = cards.push("M", "X", "Y", "Z");

console.log(
  "After pushing M X Y Z or adding new items to this array there are now",
  count,
  " cards in this array. Push adds the new element to the array and returns the refreshed count and the cards array has the new elements the cards array now looks like this.",
  cards,
);

console.log(
  "3. Create a new variable called count1 that pushes three new elements N O P to the cards array to the cards array",
);
let count1 = cards.push("N", "O", "P");
console.log(
  "After pushing N, O, P or adding new items to this array there are now",
  count1,
  " cards in this array cards. Push adds the new elements to the array and returns the refreshed count. An updated cards array looks like this .... ",
  cards,
);
console.log("4. Create a new variable called newOnes that pops off card");
let newOnes = cards.pop();
console.log("here is the new variable called newOnes", newOnes);

let round = 1;
let handLength = round + 2;
console.log(handLength);

console.log(
  "5. Create a new variable called round, eventually it will be dynamic, but since I am using this exercise to create new arrays, I will use the number 1. The other variable is called handLength which is also dynamic, but it will always be 2 cards more than the round. handLength ",
  handLength,
  " is the number of cards in the hand.",
);

console.log(
  "6. Create a new variable called newerOnes that is created by shifting off the first card in the cards array",
);
let newerOnes = cards.shift();
console.log("The newerOnes variable value is ", newerOnes);

console.log("7. Finally, lets print the cards array ", cards);

console.log("8. Create an empty array called hand2");

let hand2 = [];

console.log("9. Create a variable called hand2Length and set it to the length");
let hand2Length = hand2.length;

console.log(hand2Length);
console.log(hand2);
hand2 = cards.slice(1, 3);
console.log(hand2);

console.log("10. Create a variable called inputs and set it to [1,2,3,4,5,6]");
let inputs = [1, 2, 3, 4, 5, 6];
let result = inputs.indexOf === 6;
console.log(result);

console.log("Even and Odd Words ");
const words = [
  "yes",
  "no",
  "maybe",
  "absolutely",
  "can not",
  "will not",
  "for sure",
  "no can do",
  "WTAF",
  "nope",
  "huh",
  "GTFO",
];

const evenWords = [];
const oddWords = [];
const discard = [];

const first = 1;
const last = 2;
const jj = first + last;

for (let i = 0; i <= 5; i++) {
  if (words[i].length % 2 === 0) {
    evenWords.push(words[i]);
  }
  if (words[i].length % 2 !== 0) {
    oddWords.push(words[i]);
  }

  if (discard.length === 0) {
    discard.push(words[i]);
  }
}

// words.forEach((word, index) => {
//   if (index % 2 === 0) {
//     evenWords.push(word);
//   } else {
//     oddWords.push(word);
//   }
// });

console.log("Even Words:", evenWords);
console.log("Odd Words:", oddWords);
console.log("Discard:", discard);

```
```js
// Generate an array with 108 random strings for the example.
const words = Array.from({ length: 108 }, (_, i) => `word${i + 1}`);

const evenWords = [];
const oddWords = [];
const lastWord = [];

// Populate the evenWords and oddWords arrays
for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    evenWords.push(words[i]);
  } else {
    oddWords.push(words[i]);
  }
}

// Populate the lastWord array with the next word in the dataset
lastWord.push(words[6]);

// Create the master dataset with the remaining elements
const masterDataset = words.slice(7);

console.log('Even Words:', evenWords);
console.log('Odd Words:', oddWords);
console.log('Last Word:', lastWord);
console.log('Master Dataset:', masterDataset);
console.log('Master Dataset Length:', masterDataset.length);
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

```js
console.log("1. Create an array");
const cards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
console.log("Starting Array = ", cards);

console.log(
  "2. Create a new variable called count that pushed M, X, Y, Z to cards",
);
let count = cards.push("M", "X", "Y", "Z");

console.log(
  "After pushing M X Y Z or adding new items to this array there are now",
  count,
  " cards in this array. Push adds the new element to the array and returns the refreshed count and the cards array has the new elements the cards array now looks like this.",
  cards,
);

console.log(
  "3. Create a new variable called count1 that pushes three new elements N O P to the cards array to the cards array",
);
let count1 = cards.push("N", "O", "P");
console.log(
  "After pushing N, O, P or adding new items to this array there are now",
  count1,
  " cards in this array cards. Push adds the new elements to the array and returns the refreshed count. An updated cards array looks like this .... ",
  cards,
);
console.log("4. Create a new variable called newOnes that pops off card");
let newOnes = cards.pop();
console.log("here is the new variable called newOnes", newOnes);

let round = 1;
let handLength = round + 2;
console.log(handLength);

console.log(
  "5. Create a new variable called round, eventually it will be dynamic, but since I am using this exercise to create new arrays, I will use the number 1. The other variable is called handLength which is also dynamic, but it will always be 2 cards more than the round. handLength ",
  handLength,
  " is the number of cards in the hand.",
);

console.log(
  "6. Create a new variable called newerOnes that is created by shifting off the first card in the cards array",
);
let newerOnes = cards.shift();
console.log("The newerOnes variable value is ", newerOnes);

console.log("7. Finally, lets print the cards array ", cards);

console.log("8. Create an empty array called hand2");

let hand2 = [];

console.log("9. Create a variable called hand2Length and set it to the length");
let hand2Length = hand2.length;

console.log(hand2Length);
console.log(hand2);
hand2 = cards.slice(1, 3);
console.log(hand2);

console.log("10. Create a variable called inputs and set it to [1,2,3,4,5,6]");
let inputs = [1, 2, 3, 4, 5, 6];
let result = inputs.indexOf === 6;
console.log(result);

console.log("Chat gpt says... ");
const words = [
  "yes",
  "no",
  "maybe",
  "absolutely",
  "can not",
  "will not",
  "should never",
  "please",
  "thank you",
  "sorry",
];

const evenWords = [];
const oddWords = [];

const findEvensThree = (words, 3)=>{
  
  for (i = 0;i <100; i++)
if(i%2 != 0){
     console.log(i);
}
}


words.forEach((word, index) => {
  let round = 1;
  let handLength = round + 2;
  if (index % 2 === 0 && index <= handLength) {
    evenWords.push(word);
  } 
    if (index % 2 != 0 && index <= handLength) {
      oddWords.push(word);
    }
  
  else {
    oddWords.push(word);
  }
});

console.log("Even Words:", evenWords);
console.log("Odd Words:", oddWords);

```