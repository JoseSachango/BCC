const Child = require("../child");

describe("Child", () => {
  it("If the name parameter is not equal to a string",()=>{
      const cb = ()=> new Child(7)
        const err = new Error(
    "Expected parameter 'name' to be a non-empty string"
    
    )

    expect(cb).toThrowError(err)
  })
});
