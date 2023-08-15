import {Rectangle as RectangleInterface} from "./interfaces/Rectangle.interface";

export class Rectangle implements RectangleInterface {
    constructor(private width: number, private height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }
  
    interact(): string {
      return 'Interacting with rectangle';
    }
  
    getWidth(): number {
      return this.width;
    }
  
    getHeight(): number {
      return this.height;
    }
  }