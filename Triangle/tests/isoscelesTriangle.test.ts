import { IsoscelesTriangle } from '../IsoscelesTriangle';

describe('IsoscelesTriangle', () => {
    it('calculates area correctly', () => {
      const isosceles = new IsoscelesTriangle(10, 5);
      expect(isosceles.getArea()).toBe(25);
    });
  
    it('returns base and height', () => {
      const isosceles = new IsoscelesTriangle(10, 5);
      expect(isosceles.getBase()).toBe(10);
      expect(isosceles.getHeight()).toBe(5);
    });
  
    it('interacts correctly', () => {
      const isosceles = new IsoscelesTriangle(10, 5);
      expect(isosceles.interact()).toBe('Interacting with isosceles triangle');
    });
  
    it('calculates leg length', () => {
      const isosceles = new IsoscelesTriangle(4, 5);
      expect(isosceles.getLegLength()).toBe(4);
    });
  });