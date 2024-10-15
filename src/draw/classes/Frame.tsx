
import { Drawable } from "../interfaces/Drawable";
import {  Text } from "react-konva";

export class Frame implements Drawable {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number

    constructor(width: number, height: number, x: number, y: number) {
        this._height = height;
        this._width = width;
        this._x = x;
        this._y = y;
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

    draw() {
        return (
            <Text text="frame test" x={500}  y={300}  />
        )
    }
}