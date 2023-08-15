# Geometric Shapes TrueConfTa Library

A TypeScript library for working with various geometric shapes, including rectangles, triangles, circles, and isosceles triangles.

## Installation

To install the library, you can clone the repository and install the dependencies:


```bash
    git clone https://github.com/kirshik/geometric-shapes-trueconfta-library.git

    cd geometric-shapes-trueconfta-library
    npm install --save
```

## Usage

```typescript

    import { Rectangle, Triangle, Circle, IsoscelesTriangle } from 'geometric-shapes-trueconfta-library';

    const rectangle = new Rectangle(10, 5);
    console.log('Rectangle Area:', rectangle.getArea());

    const circle = new Circle(5);
    console.log('Circle Area:', circle.getArea());

    const isosceles = new IsoscelesTriangle(10, 5);
    console.log('Isosceles Triangle Leg Length:', isosceles.getLegLength());
```

## Available Shapes

### Rectangle

A class to represent rectangles.

#### Methods

- `getArea(): number`: Get the area of the rectangle.
- `getWidth(): number`: Get the width of the rectangle.
- `getHeight(): number`: Get the height of the rectangle.
- `interact(): string`: Interact with the rectangle.

### Triangle

A class to represent triangles.

#### Methods

- `getArea(): number`: Get the area of the triangle.
- `getBase(): number`: Get the base of the triangle.
- `getHeight(): number`: Get the height of the triangle.
- `interact(): string`: Interact with the triangle.

### Circle

A class to represent circles.

#### Methods

- `getArea(): number`: Get the area of the circle.
- `getRadius(): number`: Get the radius of the circle.
- `getDiameter(): number`: Get the diameter of the circle.
- `interact(): string`: Interact with the circle.

### IsoscelesTriangle

A class to represent isosceles triangles (extends Triangle).

#### Methods

- `getArea(): number`: Get the area of the isosceles triangle.
- `getBase(): number`: Get the base of the isosceles triangle.
- `getHeight(): number`: Get the height of the isosceles triangle.
- `getLegLength(): number`: Get the length of the legs of the isosceles triangle.
- `interact(): string`: Interact with the isosceles triangle.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/) License

Copyright (c) [2023] [Shiriaev Kirill]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
