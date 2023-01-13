const { doubleNumbers } = require('./arrayUtilities');

describe('Array utilities', () => {
  describe('doubleNumbers', () => {
    it('should return -1 when inout is not an array', () => {
      // const res = ;

      // 
      expect(() => doubleNumbers(124)).toThrow(Error);

      // expect(res).toBe(-1);
    });
    it('should double the numbers when input is number array', () => {
      const res = doubleNumbers([1, 2, 3]);
      expect(res).toStrictEqual([2, 4, 6]);
    });
    it('should throw erro when input is string array', () => {
      // const res = doubleNumbers(['hgjgvhvh1','2','3']);
      // console.log("Result >>", res);
    });
  });
});
