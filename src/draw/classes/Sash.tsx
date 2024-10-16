import { Frame } from "./Frame";
import { Circle } from "react-konva";



export class Sash extends Frame {
    private _opening: 'fix' | 'left' | 'right';
    private _tiltAndTurn: boolean;

    constructor(width: number, height: number, x: number, y: number, opening: 'fix' | 'left' | 'right', tiltAndTurn: boolean) {
        super(width, height, x, y);
        this._opening = opening;
        this._tiltAndTurn = tiltAndTurn
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
        super.draw();
        return <Circle x={90} y={90} radius={10} stroke='black' strokeWidth={4} />
    }
}