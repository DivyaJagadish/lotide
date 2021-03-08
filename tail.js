const tail = function(array1) {
  let array2 = [];
  for ( let i = 1; i < array1.length ; i++){
    array2.push(array1[i])
  }
  return (array2);
};
 module.exports = tail;
