class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id;
    this.numberOfWheels = numberOfWheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}


class Car extends Vehicle{

  constructor(color,passengers){
    this.color = color;
    this.passengers = passengers;

    checkPassengers(){
      if(!this.passengers<=4){
        console.log("There are too many passengers!");
      }
    }

    useHorn(){
      console.log("Beep, beep.")
    }

  

}

class Boat extends Vehicle{
  this.crew = crew;

  crewSoundOff(){
    for(let i in this.crew){
      console.log(this.crew[i])
    }
  }

  useHorn(){
    console.log("HONKKK!")
  }
}



module.exports = Vehicle;
