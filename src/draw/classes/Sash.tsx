import { Drawable } from "../interfaces/Drawable";
import { Circle, Line, Rect } from "react-konva";
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
        return (
            <>
                <Rect x={this._x} y={this._y} width={this._width} height={this._height} stroke='red' strokeWidth={4} scale={this._scale} strokeScaleEnabled={false} />
                <Line points={[this._x + 20, this._y, this._x, this._y + this._height]} stroke='gray' strokeWidth={2} />
                <Circle x={90} y={150} radius={10} stroke='black' strokeWidth={4} />
            </>
        )
    }
}