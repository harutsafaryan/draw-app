import { Drawable } from "../interfaces/Drawable";
import { Circle, Line, Rect, Text } from "react-konva";
import { Rectangle } from "./Rectangle";



export class Sash extends Rectangle implements Drawable {
    private _opening: 'fix' | 'left' | 'right';
    private _tiltAndTurn: boolean;
    private _scale: { x: number, y: number };

    constructor(x: number, y: number, width: number, height: number, opening: 'fix' | 'left' | 'right', tiltAndTurn: boolean, scale: { x: number, y: number }) {
        super(x, y, width, height);
        this._opening = opening;
        this._tiltAndTurn = tiltAndTurn
        this._scale = scale;
    }

    get opening() { return this._opening }
    get tiltAndTurn() { return this._tiltAndTurn }

    set opening(value) { this._opening = value }
    set tiltAndTurn(value) {
        if (value === true) {
            if (this._opening !== 'fix')
                this._tiltAndTurn = true;
            else
                throw new Error('Fixed sash can not be tilt and turn')
        }
        else
            this._tiltAndTurn = false;
    }

    draw() {
        console.log('scale: ', this._scale)
        return (
            <>
                <Rect
                    x={this._x * this._scale.x}
                    y={this._y * this._scale.y}
                    width={this._width}
                    height={this._height}
                    scale={this._scale}
                    strokeScaleEnabled={false}
                    strokeWidth={4}
                    stroke='red'
                />
                {
                    this._opening === 'left'
                        ? <Line points={[this._x, this._y, this.x + this._width, this._y + this._height / 2, this._x, this._y + this._height]} scale={this._scale} stroke='gray' dash={[30, 30]} />
                        : <Line points={[this._x + this.width, this._y, this.x, this._y + this._height / 2, this._x + this._width, this._y + this._height]} scale={this._scale} stroke='gray' dash={[30, 30]} />
                }
                {
                    this._tiltAndTurn &&
                    <Line points={[this._x, this._y + this._height, this.x + this.width/2, this._y, this._x + this._width, this._y + this._height]} scale={this._scale} stroke='gray' dash={[30, 30]} />
                }
            </>
        )
    }
}