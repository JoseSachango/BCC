var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");






function toggleDisplay(event) {
  console.log(event)
  var value = event.target.value;
  
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
    
    document.addEventListener("keydown",function(event){
      console.log(event)
      keyEventsEl.children[0].children[1].textContent = event.key
      keyEventsEl.children[1].children[0].textContent = event.code
    })
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }


}


/*
function test (event){
  keyIdTarget.innerHTML= "Hello"
  console.log("it worked")
}
*/


eventType.addEventListener('change',toggleDisplay)