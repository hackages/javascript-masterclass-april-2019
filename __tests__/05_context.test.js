describe.skip('Context with "this"', () => {
  it('"this" and the new keyword', () => {
    function User(login) {
      this.login = login;
    }

    const user = __;

    expect(user).toBeDefined();
    expect(user.login).toEqual('Victor');
  });
  it('"this" inside a method', () => {
    const person = {
      name: 'bob',
      intro: function() {
        return 'Hello, my name is ' + this.__;
      },
    };
    expect(person.intro()).toEqual(__);
  });

  describe.skip('call vs apply vs bind', () => {
    it('"this" set explicitly with call', function() {
      const person = {
        name: 'bob',
        intro: function() {
          return 'Hello, my name is ' + this.name;
        },
      };

      // calling a function with 'call' lets us assign "this" explicitly
      const message = person.intro.call({ __: 'Frank' });
      expect(message).toEqual('Hello, my name is Frank');
    });
    it('"this" set explicitly with apply', function() {
      const person = {
        name: 'bob',
        intro: function() {
          return 'Hello, my name is ' + this.name;
        },
      };

      // calling a function with 'apply' lets us assign "this" explicitly
      const message = person.intro.apply({ __: 'Frank' });
      expect(message).toEqual('Hello, my name is Frank');
    });

    it('"this" predefined with bind', function() {
      const person = {
        name: 'bob',
        intro: function() {
          return 'Hello, my name is ' + this.name;
        },
      };

      const intro = person.intro.bind({ name: 'Marta' });

      expect(intro()).toEqual('Hello, my name is Marta');
    });
  });
});
