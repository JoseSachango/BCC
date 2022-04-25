function Character(name,profession,age,strength,hitPoints,printStats){

    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = ()=>{
        console.log(this.name);
        console.log(this.profession);
        console.log(this.age);
        console.log(this.strength);
        console.log(this.hitPoints);
    };


}


var character1 = new Character("Jake","Warrior",26,100,75);
var character2 = new Character("John","Wizard",30,120,60);

console.log(character1);
console.log(character2);

character1.prototype.isAlive = ()=>{
    console.log()
}
