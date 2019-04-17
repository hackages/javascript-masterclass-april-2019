describe.skip('Destructuring', () => {
  describe.skip('Object - Getting User Info...', () => {
    function getUserInfo() {
      return {
        id: 8798,
        name: 'Davy Engone',
        company: 'Hackages',
        country: 'Everywhere',
        handles: {
          twitter: 'davyengone',
          skype: 'davy_engone',
        },
      };
    }

    // TODO: Retrieve the user's id, name as fullName and twitter handle from getUserInfo
    it('With ES5', () => {
      let userInfo = getUserInfo();

      expect(id).toBeDefined();
      expect(fullName).toEqual('Davy Engone');
      expect(twitter).toEqual('davyengone');
    });

    it('With ES6 object Destructuring to do the same operation', () => {
      // TODO Extract the required information using the spread operator.
      const {} = getUserInfo();
      expect(id).toBeDefined();
      expect(fullName).toEqual('Davy Engone');
      expect(twitter).toEqual('davyengone');
    });
  });

  describe.skip('Array...', () => {
    let fruits = [
      'brussels sprout',
      'apple',
      'beetroot',
      'broccoli',
      'carrot',
      'cherry',
    ];

    it('With ES5', () => {
      expect(first).toEqual('brussels sprout');
      expect(last).toEqual('cherry');
    });

    it('With ES6', () => {
      // TODO: Get the first fruit
      expect(actual).toEqual('brussels sprout');
      // TODO: Get the last fruit
      expect(actual).toEqual('cherry');
      // TODO: Get the queue fruit;
      expect(actual).toEqual([
        'apple',
        'beetroot',
        'broccoli',
        'carrot',
        'cherry',
      ]);
    });

    it('With ES6 & default value', () => {
      let dog = 'Larry';
      let cat;

      let actual;
      const result = ['Larry', 'Katy'];
      expect(actual).toEqual(result);
    });

    it('With ES6 & For iterations', () => {
      const people = [
        {
          name: 'Mike',
          age: 35,
        },
        {
          name: 'Tom',
          age: 25,
        },
      ];

      let actual = [];

      // TODO: Write the destructuring and the push statement to satisfy all assertions
      for (let {} of people) {
        actual.push();
      }

      expect(actual).toEqual(['Mike 35', 'Tom 25']);
    });
  });

  describe.skip('Object - Drawing Chart...', () => {
    it("With ES5 & a function parameter's default value", () => {
      function drawES5Chart(options) {}

      const actual = drawES5Chart({
        cords: { x: 18, y: 30 },
        radius: 30,
      });

      expect(actual).toEqual(['big', { x: 18, y: 30 }, 30]);
    });
    it("With ES6 & a function parameter's default value", () => {
      function drawES6Chart() {}

      let actual = drawES6Chart();
      expect(actual).toEqual(['big', { x: 0, y: 0 }, 25]);

      actual = drawES6Chart({
        cords: { x: 18, y: 30 },
        radius: 30,
      });
      expect(actual).toEqual(['big', { x: 18, y: 30 }, 30]);
    });
  });
});
