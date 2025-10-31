# 🧬 DNA-pair-generator

## 🧠 Description
This project implements a **DNA base pairing algorithm** in JavaScript.  
It converts a single DNA strand into its **complementary base pairs**, according to the natural pairing rules of DNA molecules.

---

## 🔬 Background
In a DNA double helix, the bases are always paired together:

| Base | Pairs With |
|------|-------------|
| A (Adenine) | T (Thymine) |
| T (Thymine) | A (Adenine) |
| C (Cytosine) | G (Guanine) |
| G (Guanine) | C (Cytosine) |

For example:  
Input → `ATCG`  
Output → `[["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]`

---

## ⚙️ User Stories
1. The **pairElement** function takes a string of any length as input.  
2. It returns a **2D array**, where:
   - Each inner array contains two strings:  
     → the base itself and its complementary base.  
3. Pairing rules:
   - `A` ↔ `T`
   - `C` ↔ `G`

---

## 💡 Implementation

```javascript
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
  for (let item of dnaArray) {
    if (item == "A") newArray.push(["A", "T"]);
    if (item == "T") newArray.push(["T", "A"]);
    if (item == "C") newArray.push(["C", "G"]);
    if (item == "G") newArray.push(["G", "C"]);
  }
  return newArray;
};

// Tests!
console.log(pairElement("ATCGA"));
// Expected Output:
// [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]
```

## Example runs
```bash
> Input: "ATCG"
> Output: [["A","T"],["T","A"],["C","G"],["G","C"]]

> Input: "GCG"
> Output: [["G","C"],["C","G"],["G","C"]]

> Input: "ATCGA"
> Output: [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
```

## License
MIT License