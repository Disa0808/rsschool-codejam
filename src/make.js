const make = function(){
    const convertToSimpleArray = (array) => {
      let res = [];
      for (let i = 0; i < array.length; i++)
        if (!Array.isArray(array[i]))
          res.push(array[i]);
        else
          res = res.concat(convertToSimpleArray(array[i]));
      return res;
    }   

    let store = convertToSimpleArray([...arguments]);
    
    function f(){
      if(typeof arguments[0] === "function"){
        return store.reduce((res, el) => arguments[0](res, el), 0);
      } else {
        store = store.concat(convertToSimpleArray([...arguments]));     
      }
      return f;
    }
    return f
  }



module.exports = make;