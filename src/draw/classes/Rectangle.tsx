import { drawHeight, drawWidth } from '../data';


export class Rectangle {
    protected _x: number;
    protected _y: number;
    protected _width: number;
    protected _height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    get height() { return this._height }
    get width() { return this._width }
    get x() { return this._x }
    get y() { return this._y }

    set height(value) {
        if (value > 300 && value < 3000)
            this._height = value;
        else
            throw new Error(`Invalid height value ${value}`)
    }

    set width(value) {
        if (value > 300 && value < 3000)
            this._width = value;
        else
            throw new Error(`Invalid width value ${value}`)
    }

    getArea() { return this._height * this._width }
    getPerimetr() { return 2 * (this._height + this._width) }

    getScale() {
        let s1 = this._width / drawWidth;
        let s2 = this._height / drawHeight;
        return 1 / Math.max(s1, s2);
        // if (s1 > 1 || s2 > 1) {
        //     return 1 / scale; // scale more than one, so we need reduce the drawing
        // }
        // else { // scale less than one, so we need enlarge the drawing
        //     return scale;
        // }
    }
}