import { Triangle } from './Triangle.interface';

export interface IsoscelesTriangle extends Triangle {
  getLegLength(): number;
}