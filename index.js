// Code your solutions in this file

const testArray = ["Lebron James", "Kobe Bryant", "Tom Brady"];

function writeCards(testArray) {
  const copyOfTestArray = [];
  for (let i = 0; i < testArray.length; i++) {
    copyOfTestArray.push(
      `Thank you, ${testArray[i]}, for the wonderful surprise gift!`
    );
    debugger;
  }

  return copyOfTestArray;
}

writeCards(testArray);

function countDown(numbers) {
  while (numbers >= 0) {
    console.log(numbers--);
  }
}
