describe.skip('Context in JavaScript', () => {
  describe.skip('Should use call & apply', () => {
    function upperCase() {
      return this.toUpperCase();
    }

    function toFixed(numberOfDecimals) {
      return this.toFixed(numberOfDecimals);
    }

    function concat(secondArray) {
      return this.concat(secondArray);
    }

    it('with call', () => {
      // TODO Modify the call below to satisfy all the assertions below.
      const actual = upperCase();

      expect(actual).toEqual('JUAN');
    });

    it('with call and arguments', () => {
      const numberToUse = 5.56789;

      // TODO Modify the call below to satisfy all the assertions below.
      const actual = toFixed();

      expect(actual).toEqual('5.57');
    });

    it('with apply and arguments', () => {
      // TODO Modify the code below to satisfy all the assertions below.
      const actual = concat();

      expect(actual).toEqual([1, 2, 3, 4]);
    });
  });

  describe.skip('Should use bind', () => {
    it('increment the counter value', (done) => {
      const counter = {
        value: 0,
      };
      // TODO Modify the code below to satisfy all the assertions below.
      function increment() {
        this.value++;
        if (this.value === 10) {
          expect(this.value).toEqual(10);
          done();
        }
      }
      setInterval(increment, 30);
    });

    it('push a new user after 1s', (done) => {
      const hackcamp = {
        members: ['Davy'],
      };
      // TODO Modify the code below to satisfy all the assertions below.
      function addMembers() {
        this.members.push('Joker');
        expect(this.members.length).toEqual(2);
        done();
      }
      setTimeout(addMembers, 1000);
    });
  });

  describe.skip('What does "this" refer to ?', () => {
    function addMentor(mentor) {
      this.mentors.push(mentor);
      return this.mentors;
    }

    it('Should add new mentor ', () => {
      const company = {
        name: 'Hackages Lab',
        addMentor: addMentor,
      };
      const actual = company.addMentor('Juan');

      expect(actual).toEqual(['Alex', 'Juan']);
    });

    it('Should switch the context', () => {
      const hackcamp = {
        mentors: ['Eric', 'Martine'],
      };
      const davy = 'Joker';

      let actual = addMentor(davy);
      
      // TODO Modify the code above to satisfy all the assertions below.
      expect(actual).toEqual(['Eric', 'Martine', 'Joker']);

      const hackjam = {
        mentors: ['Harold', 'Bouba', 'Antonio'],
      };

      actual = addMentor(davy);
      
      // TODO Modify the code above to satisfy all the assertions below.
      expect(actual).toEqual(['Harold', 'Bouba', 'Antonio', 'Joker']);
    });
  });

  describe('More about context', () => {
    it("with 'new' keywords ", () => {
      // TODO Modify the code below to satisfy all the assertions below.
      function User(args) {
        function init() {
          this.name = args.name;
        }
      }
      const actual = new User({ name: 'Hackages' });

      expect(actual).toEqual({ name: 'Hackages' });
    });

    it("without 'new' keywords ", () => {
      /**
       * TODO
       * Start from the solution you found above.
       * Modify the function to solve the assertion
       * Also, this time try not to use the 'new' keyword
       * and simply call the User function instead.
       * Ex: const user = User({ name: 'Hackages' })
       */
      function User(args) {
        function init() {
          this.name = args.name;
        }
      }

      const actual = {}; // TODO

      expect(actual).toEqual({ name: 'Hackages' });
    });
  });
});
