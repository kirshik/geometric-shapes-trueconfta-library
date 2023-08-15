import {Shape} from '../../base/Shape.interface';
  
export interface Circle extends Shape {
    getRadius(): number;
    getDiameter(): number;
}
