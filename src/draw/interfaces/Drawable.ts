import { ReactElement } from "react";

export interface Drawable {
    x : number;
    y : number;
    draw() : ReactElement<React.FC>
}