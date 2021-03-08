const middle = function(array) {
let middlearray = [] ;
if (array.length > 2 && array.length % 2 === 0){
  middlearray.push(array[array.length/2-1]);
  middlearray.push(array[(array.length/2)]);
} else if( array.length >2 && array.length % 2 != 0) {
  middlearray.push(array[(array.length+1)/2 -1]);
} return middlearray ;
};

module.exports = middle;

