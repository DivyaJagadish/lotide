const eqArrays =require("./eqArrays");
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length){
    for ( const keys of keys1) {
      if (Array.isArray(object1[keys])) {// check for arrays
      let check = eqArrays(object1[keys],object2[keys]);
       if(check === false) {
         return false;
       }
      }else if(typeof(object1[keys])=== "object"){
        const check = eqObjects(object1[keys],object2[keys]);
        if( check === false) {
          return false;
        }
      }else if (object1[keys] !== object2[keys]) { //check for primitives
         return false;
      }
    } return true;
  } else {
    return false;
  }
};


module.exports =eqObjects;