(() => {
    let myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    let arr = myArray.filter((c, d) => {
      let palindrome = c.split('').reverse().join('');
      if (c === palindrome) {
        console.log(myArray[d]);
      }
    });
  })();
  