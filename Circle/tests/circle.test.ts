import {Circle} from '../Circle';

describe('Circle', () => {
    it('calculates area correctly', () => {
      const circle = new Circle(5);
      expect(circle.getArea()).toBeCloseTo(Math.PI * 25, 5);
    });
  
    it('returns radius', () => {
      const circle = new Circle(5);
      expect(circle.getRadius()).toBe(5);
    });
  
    it('returns diameter', () => {
      const circle = new Circle(5);
      expect(circle.getDiameter()).toBe(10);
    });
  
    it('interacts correctly', () => {
      const circle = new Circle(5);
      expect(circle.interact()).toBe('Interacting with circle');
    });
});