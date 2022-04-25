// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

var basic = "basic"


// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var array = ["array1","array2","array3","array4","array5"]


// Create an array of five numbers

var array2 = [1,2,3,4,5]




// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"

for (let i=0;i<5;i++){
    console.log("My name is Bob")
}



// Create a for loop that loops through your five string array

for(let i in array){
    console.log(array[i])
}


// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function takestwo(arg1,arg2){
    return arg1/arg2
}

takestwo(5,10)


// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

function takesarray(arr){

    for(let i in arr){
        console.log(arr[i])
    }

}


// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

var obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}


// Console log any three of the properties in that object

console.log(obj.key1)


// Create an Array of 5 Objects

var array3 = [{key4:"value4",key41:"value41",key42:"value42"},{key5:"value5",key51:"value51",key52:"value52"},{key6:"value6",key61:"value61",key62:"value62"},{key7:"value7",key71:"value71",key72:"value72"},{key8:"value8",key81:"value81",key82:"value82"}]


// Console log 3 properties for every one of the five objects

for(let i in array3){
    for(let j=0;j<i.length;j++){
        console.log(i[j])
    }
}



// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

var button = $("<button>")
button.click(function(){})




// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.


