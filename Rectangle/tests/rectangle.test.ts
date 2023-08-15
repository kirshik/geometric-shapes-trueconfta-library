import {Rectangle} from '../Rectangle';

describe('Rectangle', () => {
    it('calculates area correctly', () => {
      const rectangle = new Rectangle(10, 5);
      expect(rectangle.getArea()).toBe(50);
    });
  
    it('returns width and height', () => {
      const rectangle = new Rectangle(10, 5);
      expect(rectangle.getWidth()).toBe(10);
      expect(rectangle.getHeight()).toBe(5);
    });
  
    it('interacts correctly', () => {
      const rectangle = new Rectangle(10, 5);
      expect(rectangle.interact()).toBe('Interacting with rectangle');
    });
});