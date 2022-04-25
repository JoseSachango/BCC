// Benchmark is a library that times
var Benchmark = require("benchmark");
var generate = require("../shared/generate");

// Generate an array of the given length.
var length = 1000;
var stuff;

// A "suite" is a series of code snippets you
//   want to execute and time.
var suite1 = new Benchmark.Suite();
var suite2 = new Benchmark.Suite();

suite1
  // Add the function 'generate' to the suite.
  .add("Generating", () => {
    stuff = generate(length);
  })
  // On 'start', run the 'start' function.
  .on("start", function start() {
    console.log("Beginning array generation benchmark...");
  })

  // On the 'complete' event, run the 'report' function.
  .on("complete", function report() {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, "successful")[0];

    console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");

    suite2 // Add the function 'linearSearch' to the suite.
    .add("Linear Search", function linearSearch() {
      var randomValue = stuff[Math.ceil(Math.random() * length)];

      for (var i = 0; i < stuff.length; i += 1) {
        if (stuff[i] === randomValue) {
          return stuff[i];
        }
      }
      return false;
    })
    // On 'start', run the 'start' function.
    .on("start", function start() {
      console.log("Beginning generated array sorting benchmark...");
    })
  
    // On the 'complete' event, run the 'report' function.
    .on("complete", function report() {
      // Get successful benchmark.
      var benchmark = Benchmark.filter(this, "successful")[0];
  
      console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");
    })
    .run();
  })
 

  // Run the test!
  .run();
