var buttoninc = document.getElementById("increment")
var buttondec = document.getElementById("decrement")
var countid = document.getElementById("count")
var number = 1

function incrementfunc (){

    countid.innerHTML = number 
    number= number+1
    console.log("The event listener is working")

}


buttoninc.addEventListener("click",incrementfunc)