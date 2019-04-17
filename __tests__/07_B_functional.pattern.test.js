describe.skip('JavaScript Inheritance Functional Patterns', () => {
  const animal = function(name) {
    const that = {};
    that.name = name || '';
    that.gender = '';
    that.planetOfBirth = 'Earth';
    that.getGender = function() {
      return this.gender;
    };
    return that;
  };

  const male = function(name) {
    const that = animal(name);
    that.name = name;
    that.gender = 'Male';
    return that;
  };

  const dog = male('joe');
  it('Analysing dog', () => {
    // What will be his gender?
    expect(dog.getGender()).toEqual(__);
    // Where was he born?
    expect(dog.planetOfBirth).toEqual(__);
  });

  const female = function(name) {
    const that = animal(name);
    that.name = name;
    that.gender = 'Female';
    return that;
  };

  const cat = female('ana');
  it('Analysing cat', () => {
    // What will be his gender?
    expect(cat.getGender()).toEqual(__);
    // Where was he born?
    expect(cat.planetOfBirth).toEqual(__);
  });

  it('Analysing dog and cat', () => {
    // Changing the planetOfBirth for the dog to "Pluton"
    dog.planetOfBirth = 'Pluton';
    // Where were they born?
    expect(dog.planetOfBirth).toEqual(__);
    expect(cat.planetOfBirth).toEqual(__);
  });
});
