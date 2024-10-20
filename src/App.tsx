import React from 'react';
import './App.css';
import { Layer, Stage } from 'react-konva';
import { Sash } from './draw/classes/Sash';
import { drawHeight, drawWidth } from './draw/data';
import { Frame } from './draw/classes/Frame';
import { Impost } from './draw/classes/Impost';

function App() {

  const frame = new Frame(0, 0, 2000, 2000);
  const scale = frame.getScale();
  const sash = new Sash(0, 300, 2000, 1700, 'right', true, scale);
  const impost =  new Impost(1000, 0 , 2000, 'vertical', scale);

  let d = [];
  d.push(frame);
  d.push(sash);
  d.push(impost);

  return (
    <Stage width={drawWidth+10} height={drawHeight+10} >
      <Layer>
        {d.map(e => e.draw())}
      </Layer>
    </Stage>
  );
}

export default App;
