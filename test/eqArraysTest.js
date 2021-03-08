const assertEqual = require("../assertEqual");
const eqArrays =require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertEqual(eqArrays([1, [2, 3], 4, 5], [1, [2, 3], 4, 5]),true);
assertEqual(eqArrays([1, [2, [3,2,[1]], 4, 5],6],[1, [2, [3,2,[1]], 4, 5],6]),true);
assertEqual(eqArrays([1, [2, [3,2,[1,[2,3]]], 4, 5],6],[1, [2, [3,2,[1,[2,3]]], 4, 5],6]),true);

