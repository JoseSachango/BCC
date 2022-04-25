class Character {

    constructor(Name,Strength,HitPoints){
      this.name = Name;
      this.strength = Strength;
      this.hitpoints = HitPoints; 
    }


  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for NAME are as following: ${this.name}`);
    console.log(`Each attack will do ${this.strength}.` );
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {}

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    
    opponent.hitpoints = opponent.hitpoints - this.strength
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
var character1 = new Character("Warrior",20,100);
var character2 = new Character("Mage",30,90);

// Create an interval that alternates attacks every 2000 milliseconds

var char1 = character1;
var char2 = character2;

setInterval(function(){

  char1.attack(char2)

    If(char1 === character1){
      char1 = character2
    }
    else if(char1 === character2){
      char1 = character1
    }

    If(char2 === character2){
      char2 = character1
    }
    else if(char2 === character1){
      char2 = character2
    };
    
    


},2000)
