//Answers for Easy Going:
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Answers for Get Even:
for (let j = 0; j <= 200; j++) {
  if (j !== 0 && j % 2 === 0) {
    console.log(j);
  }
}


//Answers for Excited Kitten:

// 1.

const message = "Love me, pet me! HSSSSSS!";

for (let k = 0; k < 20; k++) {
  console.log(message);
}

// 2.

const evenMessage1 = "...human...why you taking pictures of me?...";
const evenMessage2 = "...the catnip made me do it...";
const evenMessage3 = "...why does the red dot always get away...";

const arrayOfEvenMessages = [evenMessage1, evenMessage2, evenMessage3];

const getRandomMessage = function(array) {
  return array[Math.floor(Math.random() * (array.length))]
}

for (let m = 1; m <= 20; m++) {
  if (m % 2 === 0) {
    console.log(getRandomMessage(arrayOfEvenMessages));
  } else {
    console.log(message);
  }
}


//Answer for Fizz Buzz:

for (let n = 1; n <= 100; n++) {
  if (n % 5 === 0 && n % 3 === 0) {
    console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}


//Answers for Getting to Know You

const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const matt = ["Matt H", 186, "Philadelphia"];

// 1.
thom[0] = "Gameboy"

// 2.
karolin[1] = karolin[1] + 1;

// 3.
matt[2] = "Gotham City";

// 4.
kristyn.pop();
kristyn.push("Brooklyn");


//Answers for Yell at the Ninja Turtles

// 1.
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// 2.
for (let p = 0; p < ninjaTurtles.length; p++) {
  console.log(ninjaTurtles[p].toUpperCase());
}


//Answers for Return of the Closets

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Alien Attire :

let kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

// Dress Us Up :

const randomArticlePicker = function(array) {
  return Math.floor(Math.random() * (array.length));
}
let thomsRandomShirt = function() {
  return thomsCloset[0][randomArticlePicker(thomsCloset[0])];
}
let thomsRandomPants = function() {
  return thomsCloset[1][randomArticlePicker(thomsCloset[1])];
}
let thomsRandomAcc = function() {
  return thomsCloset[2][randomArticlePicker(thomsCloset[2])];
}

let generateThomsRandomOutfit = function() {
  return "Thom will wear a " + thomsRandomShirt() + ", " + thomsRandomPants() + ", and " + thomsRandomAcc();
}

for (let q = 0; q < 3; q++) {
  console.log(generateThomsRandomOutfit() + " and Kristyn will wear " + kristynsCloset[0] + ", " + kristynsCloset[2] + ", " + kristynsCloset[3] + ", and " + kristynsCloset[4] + ".");
}


// Dirty Laundry :

for (let r = 0; r < kristynsCloset.length; r++) {
  console.log("WHIRR: Now washing " + kristynsCloset[r]);
}


// Inventory :

for (let s = 0; s < thomsCloset.length; s++) {
  for (let t = 0; t < thomsCloset[s].length; t++) {
    console.log(thomsCloset[s][t]);
  }
}

// Multiples of 3 and 5 :

let sumOfMultiplesOfThreeOrFive = 0;

for (let u = 1; u < 1000; u++) {
  if (u % 3 === 0 || u % 5 === 0) {
    sumOfMultiplesOfThreeOrFive = sumOfMultiplesOfThreeOrFive + u;
  }
}


// Triangles :

// 1.
let createRightIsoscelesTriangle = function(argument) {
  let row = "";
  for (let v = 1; v <= argument; v++) {
    row = row + "#";
    console.log(row);
  }
}

createRightIsoscelesTriangle(7);


// 2.
let createUpsideDownTriangle = function(argument) {
  let rowArr = [];
  for (let x = 1; x <= argument; x++) {
    rowArr.push("#");
  }
  for (let y = argument; y >= 1; y--) {
    console.log(rowArr.join(""));
    rowArr.pop();
  }
}

createUpsideDownTriangle(6);

// Find the Median :

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.sort()[Math.ceil(nums.length / 2)]);
