let rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  };
  
  let array = [1, 2, 3, 4, 5];
  let k = 2;
  
  console.log(rotateArray(array, k));