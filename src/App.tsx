import React from 'react';
import './App.css';
import { Layer, Stage } from 'react-konva';
import { Sash } from './draw/classes/Sash';
import { drawHeight, drawWidth } from './draw/data';
import { Frame } from './draw/classes/Frame';
import { Impost } from './draw/classes/Impost';

function App() {

  const d = [
    new Frame(0, 0, 200, 250),
    // new Sash(0, 0, 300, 200, 'fix', true),
    // new Impost(50, 50, 330, 'vertical'),
    // new Impost(50, 50, 300, 'horizontal'),
  ]

  return (
    <Stage width={drawWidth+10} height={drawHeight+10} >
      <Layer>
        {d.map(e => e.draw())}
      </Layer>
    </Stage>
  );
}

export default App;
