import { drawHeight, drawWidth } from "../data";
import { Drawable } from "../interfaces/Drawable";
import { Line } from "react-konva";


export class Impost implements Drawable {
    private _x: number;
    private _y: number;
    private _length: number;
    private _direction: 'vertical' | 'horizontal';
    private _scale : { x: number, y: number }

    constructor(x: number, y: number, length: number, direction: 'vertical' | 'horizontal', scale: { x: number, y: number }) {
        this._x = Math.trunc(x / 10) * 10;
        this._y = Math.trunc(y / 10) * 10;
        this._length = Math.trunc(length / 10) * 10;
        this._direction = direction;
        this._scale = scale;
    }

    get x() { return this._x }
    get y() { return this._y }
    get length() { return this._length }
    get direction() { return this._direction }

    set x(value) { this._x = Math.trunc(value / 10) * 10 }
    set y(value) { this._y = Math.trunc(value / 10) * 10 }
    set direction(value) { this._direction = value }

    set length(value) {
        if (value > 300 && value < 3000)
            this._length = Math.trunc(value / 10) * 10
        else
            throw new Error(`Invalid length value ${value}`)

    }

    getScale() {
        let s = this._direction === 'horizontal' ? this._length / drawWidth : this._length / drawHeight;
        let f = 1 / s;
        f = f * 100;
        return Math.floor(f) / 100;
    }

    draw() {
        if (this.direction === 'vertical')
            return <Line points={[this._x, this._y, this._x, this._y + this._length]} stroke='orange' strokeWidth={4} scale={this._scale} strokeScaleEnabled={false} />
        else
            return <Line points={[this._x, this._y, this._x + this._length, this._y]} stroke='orange' strokeWidth={4} scale={this._scale} strokeScaleEnabled={false} />
    }
}