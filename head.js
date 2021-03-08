const head = function(array1) { //returns head of an array
  if (array1.length !== 0) {
    return (array1[0]);
  } else {
    return (undefined);
  }
};

 module.exports = head;