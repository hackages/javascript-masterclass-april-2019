describe.skip('Objects', () => {
  it('object type', () => {
    const empty_object = {};
    expect(typeof empty_object).toEqual(__);
  });

  it('object literal notation', () => {
    let person = {
      __: __,
      __: __,
    };
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  it('dynamically adding properties', () => {
    const person = {};
    person.__ = 'Amory Blaine';
    person.__ = 102;
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  it('adding properties from strings', () => {
    const person = {};
    person['__'] = 'Amory Blaine';
    person['__'] = 102;
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  describe.skip("'this' context", () => {
    it("should confirm that when a function is attached to an object, 'this' refers to the object", () => {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      let megalomaniac = {
        mastermind: 'James Wood',
        henchman: 'Adam West',
        birthYear: 1970,
        calculateAge: function() {
          return currentYear - this.birthYear;
        },
      };

      expect(currentYear).toEqual(__);
      expect(megalomaniac.calculateAge()).toEqual(__);
    });
  });
});
