import { Drawable } from "../interfaces/Drawable";
import {  Text } from "react-konva";


export class Impost implements Drawable {
    private _x: number;
    private _y: number;
    private _length: number;
    private _direction: 'vertical' | 'horizontal';

    constructor(x: number, y: number, length: number, direction: 'vertical' | 'horizontal') {
        this._x = x;
        this._y = y;
        this._length = length;
        this._direction = direction
    }

    get x() { return this._x }
    get y() { return this._y }
    get length() { return this._length }
    get direction() { return this._direction }

    set x(value) { this._x = value }
    set y(value) { this._y = value }
    set direction(value) { this._direction = value }

    draw() {
        return (
            <Text text="impost test" x={50} y={60} />
        )
    }
}