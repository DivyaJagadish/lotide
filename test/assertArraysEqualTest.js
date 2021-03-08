const assertArraysEqual =require("../assertArraysEqual")

assertArraysEqual([1,2,3],[1,2,3]);//true
assertArraysEqual([1,2,3,4],[1,12,3,4])//false
assertArraysEqual([1,[3,4,[5],6],7],[1,[3,4,[5],6],7]);//true
 
