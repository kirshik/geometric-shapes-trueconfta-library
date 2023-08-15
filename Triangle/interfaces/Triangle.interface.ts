import {Shape} from '../../base/Shape.interface';
  
export interface Triangle extends Shape {
  getBase(): number;
  getHeight(): number;
}

