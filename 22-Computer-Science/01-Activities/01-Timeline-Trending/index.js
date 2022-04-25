function generate(length) {
  var arr = [];
  for (var i = 0; i < length; i += 1) {
    arr.push(Math.ceil(Math.random() * length));
  }
  return arr;
}

console.time("three");
generate(3);
console.timeEnd("three");
console.log("--------------");




// console.time("ten");
// generate(10);
// console.timeEnd("ten");
// console.log("--------------");


// console.time("one-hundred");
// generate(100);
// console.timeEnd("one-hundred");
// console.log("--------------");


// console.time("one-thousand");
// generate(1000);
// console.timeEnd("one-thousand");
// console.log("--------------");


// console.time("one-hundred-thousand");
// generate(100000);
// console.timeEnd("one-hundred-thousand");
// console.log("--------------");
