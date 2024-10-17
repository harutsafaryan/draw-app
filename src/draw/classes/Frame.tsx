
import { Drawable } from "../interfaces/Drawable";
import { Rect } from "react-konva";
import { Rectangle } from "./Rectangle";

export class Frame extends Rectangle implements Drawable {
    draw() {
        console.log(this.getScale())
        return (
            <Rect x={this._x} y={this._y} width={this._width * super.getScale()} height={this._height * super.getScale()} stroke='blue' strokeWidth={4} />
        )
    }
}