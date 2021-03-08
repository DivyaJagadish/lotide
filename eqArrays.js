const eqArrays = function(array1,array2) {
  if (array1.length === array2.length) { // checking whether lengths are equal
    for (let i = 0; i < array2.length; i++) {
      if(Array.isArray(array1[i])) {
        const check = eqArrays(array1[i],array2[i]);
        if(check === false){
          return false;
        }
      }else if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;


