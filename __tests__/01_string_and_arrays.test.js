describe.skip('Strings and Arrays', () => {
  describe.skip('Strings', () => {
    it('concatenation', () => {
      const fruit = 'apple';
      const dish = 'pie';
      expect(fruit + ' ' + dish).toEqual(__);
    });

    it('character Type', () => {
      const characterType = typeof 'Amory'.charAt(1);
      expect(characterType).toEqual(__);
    });

    it('escape character', () => {
      const stringWithAnEscapedCharacter = '\u0041pple';
      expect(stringWithAnEscapedCharacter).toEqual(__);
    });

    describe('String as Array', () => {
      it('string.length', () => {
        const fruit = 'apple';
        expect(fruit.length).toEqual(__);
      });

      it('slice', () => {
        const fruit = 'apple pie';
        expect(fruit.slice(0, 5)).toEqual(__);
      });
    });
  });

  describe.skip('About Arrays', () => {
    //We shall contemplate truth by testing reality, via spec expectations.
    it('should create arrays', () => {
      const emptyArray = [];
      expect(typeof emptyArray).toEqual(__);
      expect(emptyArray.length).toEqual(__);

      const multiTypeArray = [
        0,
        1,
        'two',
        () => {
          return 3;
        },
        { value1: 4, value2: 5 },
        [6, 7],
      ];
      expect(multiTypeArray[0]).toEqual(__);
      expect(multiTypeArray[2]).toEqual(__);
      expect(multiTypeArray[3]()).toEqual(__);
      expect(multiTypeArray[4].value1).toEqual(__);
      expect(multiTypeArray[4]['value2']).toEqual(__);
      expect(multiTypeArray[5][0]).toEqual(__);
    });

    it('should understand array literals', () => {
      const array = [];

      // Oops
      expect(array).not.toEqual([]);

      expect(array).toEqual(__);

      array[0] = 1;
      expect(array).toEqual(__);

      array[1] = 2;
      expect(array).toEqual(__);

      array.push(3);
      expect(array).toEqual(__);
    });

    it('should understand array length', () => {
      let array = [1, 2, 3, 4];

      expect(array.length).toEqual(__);
      array.push(5, 6);
      expect(array.length).toEqual(__);

      array = new Array(10);
      expect(array.length).toEqual(__);

      array.length = 5;
      expect(array.length).toEqual(__);
    });

    it('should slice arrays', () => {
      const array = ['peanut', 'butter', 'and', 'jelly'];

      expect(array.slice(0, 1)).toEqual(__);
      expect(array.slice(0, 2)).toEqual(__);
      expect(array.slice(2, 2)).toEqual(__);
      expect(array.slice(2, 20)).toEqual(__);
      expect(array.slice(3, 0)).toEqual(__);
      expect(array.slice(5, 1)).toEqual(__);
      expect(array.slice(1)).toEqual(__);
      expect(array.slice(0, -1)).toEqual(__);
      expect(array.slice(0, -3)).toEqual(__);
    });

    it('should know array references', () => {
      const array = ['zero', 'one', 'two', 'three', 'four', 'five'];

      function passedByReference(refArray) {
        refArray[1] = 'changed in function';
      }

      passedByReference(array);
      expect(array[1]).toEqual(__);

      const assignedArray = array;
      assignedArray[5] = 'changed in assignedArray';
      expect(array[5]).toEqual(__);

      const copyOfArray = array.slice();
      copyOfArray[3] = 'changed in copyOfArray';
      expect(array[3]).toEqual(__);
    });

    it('should push and pop', () => {
      const array = [1, 2];
      array.push(3);
      expect(array).toEqual(__);

      const poppedValue = array.pop();
      expect(poppedValue).toEqual(__);
      expect(array).toEqual(__);
    });
  });
});
