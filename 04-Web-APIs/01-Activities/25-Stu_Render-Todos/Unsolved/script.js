var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");


var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// create function that loops through the todos array and adds value to <ul> in the browser

function updatinglist (){

    for(var i=0;i<todos.length;i++){

        var listtag = document.createElement("li")
        listtag.innerHTML = todos[i]
        todoList.appendChild(listtag)
        
    }
}
//throw it into the ul tag as a li item

updatinglist()

todoForm.addEventListener("submit",function(event){
    event.preventDefault()

    var userinput = todoInput.value

    console.log("It's accessing the function")
    var listtag = document.createElement("li")
    listtag.innerHTML = todoInput.value 
    todoList.appendChild(listtag)
   
    
})


