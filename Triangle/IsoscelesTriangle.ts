import { IsoscelesTriangle as IsoscelesTriangleInterface} from './IsoscelesTriangle';
import { Triangle } from './Triangle';

export class IsoscelesTriangle extends Triangle implements IsoscelesTriangleInterface {
    constructor(base: number, height: number) {
      super(base, height);
    }
  
    interact(): string {
      return 'Interacting with isosceles triangle';
    }
  
    getLegLength(): number {
      return this.getBase();
    }
}