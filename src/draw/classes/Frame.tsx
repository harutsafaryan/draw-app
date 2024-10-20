
import { Drawable } from "../interfaces/Drawable";
import { Rect } from "react-konva";
import { Rectangle } from "./Rectangle";
import { drawHeight, drawWidth } from "../data";
import { round } from "../helper";

export class Frame extends Rectangle implements Drawable {

    getScale() {
        let s1 = this._width / drawWidth;
        let s2 = this._height / drawHeight;
        let f = 1 / Math.max(s1, s2);
        const scale = round(f)
        return { x: scale, y: scale };
    }

    draw() {
        console.log(this.getScale())
        return (
            <Rect
                x={this._x}
                y={this._y}
                width={this._width}
                height={this._height}
                stroke='blue'
                strokeWidth={4}
                scale={this.getScale()}
                strokeScaleEnabled={false} />
        )
    }
}