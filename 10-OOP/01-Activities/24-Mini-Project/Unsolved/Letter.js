


class Letter{

    constructor(string="P",boolean=false){
        this.string = string;
        this.boolean = boolean;
    }

    underlyingC(){
        
        if(this.boolean===true){
            return this.string 
        }else{
            return "_"
        }
    }

    checkU(char){

        if(char===this.string){
            this.boolean = true
        }else{
            this.boolean = false
        }
    }
}

module.exports = Letter;