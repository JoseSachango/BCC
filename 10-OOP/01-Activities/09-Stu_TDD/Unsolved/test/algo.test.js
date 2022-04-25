const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it(`method should take a string as an argument and return a new reversed version of the string. e.g. "Hello" should return "elloH".`,()=>{
        var str = "string"

        var newStr =""
        for(let i = str.length-1; i>0;i--){
          var newStr = newStr + str[i]
        }
        
        var Algo = new Algo();
        var reversedStr = Algo.reverse(str)

      expect(reversedStr).toEqual(newStr)
    })

  });

  describe("isPalindrome", () => {
   
  });

  describe("capitalize", () => {
    
  });
});
