describe.skip('About Functions', () => {
  it('should declare function: add', () => {
    expect(add(1, 2)).toEqual(__);
  });

  it('should know internal variables override outer variables', () => {
    let message = 'Outer';

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      message = 'Inner';
      return message;
    }

    expect(getMessage()).toEqual(__);
    expect(overrideMessage()).toEqual(__);
    expect(message).toEqual(__);
  });

  it('should have lexical scoping', () => {
    let variable = 'top-level';
    function parentfunction() {
      let variable = 'local';
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toEqual(__);
  });

  it('should use lexical scoping to synthesise functions', () => {
    function makeMysteryFunction(makerValue) {
      const newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    const mysteryFunction3 = makeMysteryFunction(3);
    const mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toEqual(__);
  });

  it('should allow extra function arguments', () => {
    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg('first', 'second', 'third')).toEqual(__);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg('arguments')).toEqual(__);

    // TODO: Fix the function to return all arguments. Hint: slice
    function returnAllArgs() {}

    expect(returnAllArgs('first', 'second', 'third')).toEqual(__);
  });
});
