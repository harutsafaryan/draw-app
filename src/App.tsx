import React from 'react';
import './App.css';
import { Layer, Stage } from 'react-konva';
import { Frame } from './draw/classes/Frame';
import { Sash } from './draw/classes/Sash';
import { Impost } from './draw/classes/Impost';

function App() {

  const d = [
    // new Frame(200, 300, 0, 0),
    new Sash(560, 258, 0, 0, 'fix', true),
    // new Impost(5, 5, 60, 'vertical'),
    // new Impost(50, 50, 300, 'horizontal'),
  ]

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {d.map(e => e.draw())}
      </Layer>
    </Stage>
  );
}

export default App;
