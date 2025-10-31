/*
I implement a DNA base pairing algorithm that converts a single DNA strand into complementary base pairs
Background:
In the double helix of the DNA, the bases are always paired together: if on one strand there is an A base, on the other strand directly in front there is a T base, the other pair is C and G.
In this project, I write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, I find the base pair character
For example, for the input ATCG, return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]
The A base gets paired with a T base, the T base is paired with a A base, the C is paired with the G base, and finally the G base is paired with a C base.
User Stories:

A pairElement function takes a string of any length as an argument.
The pairElement function returns a 2d array, where each inner array has two strings inside, the first string is one base from the input, and the second string the paired base.
When given A, the function pairs it with T.
When given T, the function pairs it with A.
When given C, the function pairs it with G.
When given G, the function pairs it with C.
*/

const pairElement = (aString) => {
  const dnaArray = aString.split("");
  let newArray = [];
  let count = 0;
  while (count < aString.length) {
    let subArray = [];
    for (i = 0; i < 2; i++) {
      console.log(`i=${i} count=${count}`);
      subArray.push(dnaArray[count]);
      count += 1;
    }
    let subArrayB = subArray.slice().reverse();
    newArray.push(subArray);
    newArray.push(subArrayB);
  }
  return newArray;
};

// Tests!
console.log(pairElement("ATCGDF"));
