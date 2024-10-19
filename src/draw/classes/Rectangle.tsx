import { drawHeight, drawWidth } from '../data';


export class Rectangle {
    protected _x: number;
    protected _y: number;
    protected _width: number;
    protected _height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this._x = Math.trunc(x / 10) * 10;
        this._y = Math.trunc(y / 10) * 10;
        this._width = Math.trunc(width / 10) * 10;
        this._height = Math.trunc(height / 10) * 10;
    }

    get height() { return this._height }
    get width() { return this._width }
    get x() { return this._x }
    get y() { return this._y }

    set height(value) {
        if (value > 300 && value < 3000)
            this._height = Math.trunc(value / 10) * 10;
        else
            throw new Error(`Invalid height value ${value}`)
    }

    set width(value) {
        if (value > 300 && value < 3000)
            this._width = Math.trunc(value / 10) * 10;
        else
            throw new Error(`Invalid width value ${value}`)
    }

    getArea() { return this._height * this._width }
    getPerimetr() { return 2 * (this._height + this._width) }
}