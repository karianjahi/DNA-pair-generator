/*
I implement a DNA base pairing algorithm that converts a single DNA strand into complementary base pairs
Background:
In the double helix of the DNA, the bases are always paired together: if on one strand there is an A base, on the other strand directly in front there is a T base, the other pair is C and G.
In this project, I write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, I find the base pair character
For example, for the input ATCG, return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]
The A base gets paired with a T base, the T base is paired with a A base, the C is paired with the G base, and finally the G base is paired with a C base.
*/


