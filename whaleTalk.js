/* 
Take a sentence like, 'Turpentine and turtles,' and translate it into its "whale talk" equivalent: 'UUEEIEE A UUEE'.

There are a few simple rules for translating text to whale speak:

- There are no consonants. Only vowels.
- The us and es are extra long, so we must double them in our program.

Once we have converted text to the whale speak, the result is sung slowly, as is a custom in the ocean.
*/

let input = "This is my whale song song and im gunna sing it all day long";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  if (input[inputIndex] === "e") {
    resultArray.push(input[inputIndex]);
  }
  else if (input[inputIndex] === "u") {
    resultArray.push(input[inputIndex]);
  }
  
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex])
    }
  }
  
}

console.log(resultArray.join('').toUpperCase())