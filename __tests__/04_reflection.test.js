describe.skip('Reflection', () => {
  describe.skip('typeof...Everything is an object', () => {
    it('object, number, boolean, string, function...', () => {
      expect(typeof {}).toEqual(__);
      expect(typeof []).toEqual(__);
      expect(typeof 'hackages').toEqual(__);
      expect(typeof -5).toEqual(__);
      expect(typeof false).toEqual(__);
      expect(typeof NaN).toEqual(__);
      expect(typeof undefined).toEqual(__);
      expect(typeof null).toEqual(__);
      expect(typeof Symbol(12)).toEqual(__);
      expect(typeof function() {}).toEqual(__);
    });

    it('Everything is an object', () => {
      expect(Object.prototype.toString.call({})).toEqual(__);
      expect(Object.prototype.toString.call([])).toEqual(__);
      expect(Object.prototype.toString.call('hackages')).toEqual(__);
      expect(Object.prototype.toString.call(-5)).toEqual(__);
      expect(Object.prototype.toString.call(false)).toEqual(__);
      expect(Object.prototype.toString.call(NaN)).toEqual(__);
      expect(Object.prototype.toString.call(undefined)).toEqual(__);
      expect(Object.prototype.toString.call(null)).toEqual(__);
      expect(Object.prototype.toString.call(Symbol(12))).toEqual(__);
      expect(Object.prototype.toString.call(function() {})).toEqual(__);
    });
  });

  describe.skip('Diving into objects, their properties, their constructor', () => {
    let A = function() {
      this.aprop = 'A';
    };

    let B = function() {
      this.bprop = 'B';
    };

    B.prototype = new A();

    it('property enumeration', () => {
      let keys = [];
      let values = [];
      let person = { name: 'Amory Blaine', age: 102, unemployed: true };
      for (let propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
      }
      expect(keys).toEqual([__, __, __]);
      expect(values).toEqual([__, __, __]);
    });

    it('hasOwnProperty', () => {
      let b = new B();
      let propertyName;

      let keys = [];
      for (propertyName in b) {
        keys.push(propertyName);
      }
      expect(keys.length).toEqual(__);
      expect(keys).toEqual(__);

      // hasOwnProperty returns true if the parameter is a property directly on the object,
      // but not if it is a property accessible via the prototype chain.
      let ownKeys = [];
      for (propertyName in b) {
        if (b.hasOwnProperty(propertyName)) {
          ownKeys.push(propertyName);
        }
      }
      expect(ownKeys.length).toEqual(__);
      expect(ownKeys).toEqual([__]);
    });

    it('constructor property', () => {
      let a = new A();
      let b = new B();
      expect(typeof a.constructor).toEqual(__);
      expect(a.constructor.name).toEqual(__);
      expect(b.constructor.name).toEqual(__);
    });
  });
});
