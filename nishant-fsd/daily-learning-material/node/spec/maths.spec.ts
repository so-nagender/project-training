import {Maths} from '../src/maths';
import {expect} from 'chai';
import 'mocha';


describe('Sum function', () => {
  let object;
  before( () => {
    object = new Maths();
  });

  it('returns correct sum of 7 and 8', () => {
    const output = object.sum(7, 8);
      expect(output).to.equal(7 + 8);
  });

  it('not returns incorrect sum of 7 and 8', () => {
    const output = object.sum(7, 8);
    expect(output).to.not.equal(16);
  });
  it('returns correct multiply of 7 and 8', () => {
    const output = object.multiply(7, 8);
      expect(output).to.equal(7 * 8);
  });
  it('returns correct divide of 7 and 8', () => {
    const output = object.sum(7, 8);
      expect(output).to.equal(7 / 8);
  });
  it('returns correct squareroot', () => {
    const output = object.sum(16);
      expect(output).to.equal(4);
  });

});
