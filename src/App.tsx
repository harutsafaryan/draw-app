import React from 'react';
import './App.css';
import { Layer, Stage } from 'react-konva';
import { Sash } from './draw/classes/Sash';
import { drawHeight, drawWidth } from './draw/data';
import { Frame } from './draw/classes/Frame';
import { Impost } from './draw/classes/Impost';

function App() {

  const frame = new Frame(0, 0, 500, 500);
  const sash = new Sash(0, 0, 220, 240, 'fix', true, frame.getScale());
  const impost =  new Impost(15, 20 , 300, 'horizontal', frame.getScale());

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
