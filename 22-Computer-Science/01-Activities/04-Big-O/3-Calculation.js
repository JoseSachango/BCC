const loopAndCreate = (arr) => { //1
  for (let i = 0; i < arr.length; i++) {  //arr.length => n

    for (let j = 0; j < arr.length; j++) { //arr.legnth => n
      console.log(arr[j]) //arr.length*arr.length => n
    }

  }
}

loopAndCreate([1, 2, 3]);
console.log("----------");
loopAndCreate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("----------");
loopAndCreate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);