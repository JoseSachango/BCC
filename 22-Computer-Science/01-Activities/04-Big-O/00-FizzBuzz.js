const fizzBuzz = (num) => {
  for (let i = 0; i <= num; i++) { // 1
    let output = ""; // 5 => n

    if (i % 3 === 0) { // 5 => n
      output += "Fizz"; // < 5 => a
    }
    if (i % 5 === 0) { // 5 => n
      output += "Buzz"; // < 5 => b
    }

    console.log(output || i); // 5 => n
  }
}

// T = 1 + n + n + a + n + b + n
// T = 1 + 4n + a + b
// T = 4n
// T = n
// fizzBuzz is O(n) => linear time complexity!

fizzBuzz(5);
// console.log("----------");
// fizzBuzz(50);
// console.log("----------");
// fizzBuzz(100);