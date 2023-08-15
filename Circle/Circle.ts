import {Circle as CircleInterface} from './interfaces/Circle.interface';

export class Circle implements CircleInterface{
    constructor(private radius: number) {}
  
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  
    interact(): string {
      return 'Interacting with circle';
    }
  
    getRadius(): number {
      return this.radius;
    }
  
    getDiameter(): number {
      return this.radius * 2;
    }
}

