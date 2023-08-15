import {Triangle as TriangleInterface} from "./interfaces/Triangle.interface";

export class Triangle implements TriangleInterface {
    constructor(private base: number, private height: number) {}
  
    getArea(): number {
      return (this.base * this.height) / 2;
    }
  
    interact(): string {
      return 'Interacting with triangle';
    }
  
    getBase(): number {
      return this.base;
    }
  
    getHeight(): number {
      return this.height;
    }
}
