import {Triangle} from '../Triangle';

describe('Triangle', () => {
  it('calculates area correctly', () => {
    const triangle = new Triangle(10, 5);
    expect(triangle.getArea()).toBe(25);
  });

  it('returns base and height', () => {
    const triangle = new Triangle(10, 5);
    expect(triangle.getBase()).toBe(10);
    expect(triangle.getHeight()).toBe(5);
  });

  it('interacts correctly', () => {
    const triangle = new Triangle(10, 5);
    expect(triangle.interact()).toBe('Interacting with triangle');
  });
});


