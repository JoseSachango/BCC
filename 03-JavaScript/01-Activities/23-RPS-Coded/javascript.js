
            var RPS= "rps"
            var userscore=[1,-1,0,1,1,-1,1]
            var wins = 0
            var loses = 0
            var ties = 0
            




            for (var i=0;i<10;i++){

                

                var userinput = prompt("r, p, or s?");
                var randchoice = Math.floor(Math.random()*3)
                var compchoice = RPS[randchoice]

                if(userinput===compchoice){
                    userscore.push(0)
                    alert("You tied this round")
                }
                else if(userinput ==="r" && compchoice==="p"){
                    userscore.push(-1)
                    alert("You lost this round")

                }
                else if(userinput ==="r" && compchoice==="s"){
                    userscore.push(1)
                    alert("You won this round")
                }
                else if(userinput ==="p" && compchoice ==="r"){
                    userscore.push(1)
                    alert("You won this round")
                }
                else if(userinput ==="p" && compchoice ==="s"){
                    userscore.push(-1)
                    alert("You lost this round")
                }
                else if(userinput ==="s" && compchoice ==="r"){
                    userscore.push(-1)
                    alert("You lost this round")
                }
                else if(userinput ==="s" && compchoice ==="p"){
                    userscore.push(1)
                    alert("You won this round")
                }
                else{
                    alert("Something went wrong")
                    alert(randchoice)
                    console.log(randchoice)

                }
                    




            }

            for(i in userscore){
                if(i===1){
                    wins = wins + i
                }
                else if (i===-1){
                    loses = loses + i
                }
                else{
                    ties = ties + i
                }
            }

            if(wins>loses){
                alert("You have more wins than loses. You win the game! =)")
                var restart = confirm("Would you like to play again?")
                if(restart){
                    document.location.href ="";
                }
            }
            else{
                alert("You have more loses than wins. You lose the game! =(")
                var restart = confirm("Would you like to play again?")
                if(restart){
                    document.location.href ="";
                }
            }