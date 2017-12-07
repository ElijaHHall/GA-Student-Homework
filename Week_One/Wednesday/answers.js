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
