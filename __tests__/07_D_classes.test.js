// You can implement your solution in another file or inline here

describe('Class in ES6', () => {
  describe('Like a function ...', () => {
    // Declare the Human class below that will satisfy all assertions
    let Human;
    it('should be a function', () => {
      expect(typeof Human).toBe('function');
    });
    it('should not be hoisted like function', () => {
      let polyFunc;

      expect(() => {
        polyFunc = new PolygoneFunc(3, 5);
      }).not.toThrow(Error);

      function PolygoneFunc(height, width) {
        this.height = height;
        this.width = width;

        this.log = function() {
          return `H:${this.height} & W:${this.width}`;
        };
      }

      let actual = polyFunc.log();

      expect(actual).toEqual('H:3 & W:5');

      let polyClass;

      // Hint: the declaration position of PolygoneClass is not correct
      expect(() => {
        polyClass = new PolygoneClass(3, 5);
      }).not.toThrow(Error);

      class PolygoneClass {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
        log() {
          return `H:${this.height} & W:${this.width}`;
        }
      }

      actual = polyClass.log();

      expect(actual).toEqual('H:3 & W:5');
    });
  });
  describe('Property ...', () => {
    // Declare and implement the Man class to satisfy all assertions below

    it('should have a name property called Human', () => {
      expect(Man).toHaveProperty('name', 'Man');
    });

    it('Should have a property prototype of type object', () => {
      expect(Man).toHaveProperty('prototype');
      expect(typeof Man.prototype).toEqual('object');
    });

    it('Should contain a property Walk of type function', () => {
      expect(Man.prototype).toHaveProperty('Walk');
      expect(typeof Man.prototype.Walk).toEqual('function');
    });

    it('Should contain a static property called inject of type array', () => {
      expect(Man).toHaveProperty('inject');
      expect(Array.isArray(Man.inject)).toBe(true);
    });

    it('Should throw an error if no fullName is passed at the instantiation', () => {
      expect(() => {
        new Man();
      }).toThrow(Error);
    });
    describe('Getter and Setter in ES6 class', () => {
      it('Should have an instance property fullName', () => {
        let obj = new Man({
          fullName: 'Tom Thomas',
        });
        const actual = obj.fullName;

        expect(actual).toBeDefined();
        expect(actual).toEqual('Tom Thomas');
      });

      it('It should throw an error if fullName is set to anything else but a string', () => {
        expect(() => {
          new Man({
            fullName: 12987,
          });
        }).toThrow(Error);
      });
    });
  });
});
