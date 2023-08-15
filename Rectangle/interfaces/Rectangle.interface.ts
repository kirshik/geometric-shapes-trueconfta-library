import {Shape} from '../../base/Shape.interface';

export interface Rectangle extends Shape {
  getWidth(): number;
  getHeight(): number;
}

