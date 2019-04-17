describe.skip('Basics JavaScript concepts', () => {
  describe.skip('About Equality', () => {
    it('numeric equality', () => {
      expect(3 == 4).toEqual(__);
    });

    it('string equality', () => {
      expect('3' == '7').toEqual(__);
    });

    it('equality without type coercion', () => {
      expect(3 == '3').toEqual(__);
    });

    it('equality with type coercion', () => {
      expect(3 == '3').toEqual(__);
      expect(3 === '3').toEqual(__);
    });

    it('equality with object', () => {
      const vic = { name: 'Vic' };
      const milen = vic;
      expect(vic === milen).toEqual(__);
      expect(vic === { name: 'Vic' }).toEqual(__);
    });

    it('Are 2 strings equal?', () => {
      const apple = 'apple';
      expect('apple' === apple).toEqual(__);
    });

    it('How about NaN', () => {
      expect(NaN === NaN).toEqual(__);
    });
  });

  describe.skip('About Truthyness', () => {
    it('truthyness of postestive numbers', () => {
      const oneIsTruthy = 1 ? true : false;
      expect(oneIsTruthy).toEqual(__);
    });

    it('truthyness of negative numbers', () => {
      const negativeOneIsTruthy = -1 ? true : false;
      expect(negativeOneIsTruthy).toEqual(__);
    });

    it('truthyness of zero', () => {
      const zeroIsTruthy = 0 ? true : false;
      expect(zeroIsTruthy).toEqual(__);
    });

    it('truthyness of null', () => {
      const nullIsTruthy = null ? true : false;
      expect(nullIsTruthy).toEqual(__);
    });

    it('null coalescing', () => {
      const result = null || 'a value';
      expect(result).toEqual(__);
    });
  });
});
