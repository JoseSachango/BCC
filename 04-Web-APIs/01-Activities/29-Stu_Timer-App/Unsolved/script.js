var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var fnSeconds= 59;


function startFunction (){


    
  
  if(document.getElementsByClassName("time")[0].children[1].getAttribute("id")!=="seconds"){
    clearInterval(interval)
  }

  else{
  
  document.getElementsByClassName("time")[0].children[1].setAttribute("id","seconds")

          var currentseconds = secondsDisplay.innerHTML 
          var currentminutes = minutesDisplay.innerHTML

          
            var interval = setInterval( 
              function(){

                  if(eval(secondsDisplay.innerHTML)>0){
                    

                    
                  var countDown = secondsDisplay.innerHTML
                  countDown--
                    
                  secondsDisplay.innerHTML = countDown
                
                  
                  

                  }
                  
                  else if (eval(secondsDisplay.innerHTML)===0) {

                  
                      var newminute = eval(minutesDisplay.innerHTML)
                      
                      newminute--
                    
                      minutesDisplay.innerHTML = `${newminute}`

                          if(eval(minutesDisplay.innerHTML)===0 && eval(secondsDisplay.innerHTML)===0){
                            console.log("it registered minutes as 0")
                            secondsDisplay.innerHTML = "00"
                            clearInterval(interval)
                          
                            
                          }

                      secondsDisplay.innerHTML = `${fnSeconds}`


                              
                          if(eval(minutesDisplay.innerHTML)===0 && eval(secondsDisplay.innerHTML)===59){
                          
                            secondsDisplay.innerHTML = "00"
                            clearInterval(interval)
                            
                            
                          }
                          

                      


                      
                        }

         

           
                 },5 )

  }



}








function startTimer() {
  // Write code to start the timer here
  // add an event listener to the play button
  // the div with the seconds id decreases by 1
  
 
   startFunction()
   
  }
   
 

  // when the play button is clicked you want the minute displayed and the seconds displayed to decrease by one.
  


function storingInfoLocally(){
  console.log(minutesDisplay.innerHTML)
  //localStorage.setItem()
}

function reset(){
 
  minutesDisplay.innerHTML = workMinutesInput.value
  secondsDisplay.innerHTML = "00"

  //playButton.removeEventListener("click",startTimer)

 // document.getElementsByClassName("time")[0].children[1].setAttribute("id","newattribute");
 
 
}

function pause(){
  localStorage.setItem("minutesDisplay",minutesDisplay.innerHTML)
  localStorage.setItem("secondsDisplay",secondsDisplay.innerHTML)
}


playButton.addEventListener("click", startTimer);
workMinutesInput.addEventListener("change",storingInfoLocally)
stopButton.addEventListener("click",reset)
pauseButton.addEventListener("click",pause)