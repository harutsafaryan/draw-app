import React from 'react';
import './App.css';
import { Layer, Stage } from 'react-konva';
import { Sash } from './draw/classes/Sash';
import { drawHeight, drawWidth } from './draw/data';

function App() {

  const d = [
    // new Frame(200, 300, 0, 0),
    new Sash(0, 0, 3000, 800, 'fix', true),
    // new Impost(5, 5, 60, 'vertical'),
    // new Impost(50, 50, 300, 'horizontal'),
  ]

  return (
    <Stage width={drawWidth} height={drawHeight}>
      <Layer>
        {d.map(e => e.draw())}
      </Layer>
    </Stage>
  );
}

export default App;
