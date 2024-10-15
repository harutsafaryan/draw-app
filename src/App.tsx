import React from 'react';
import './App.css';
import { Layer, Stage, Text } from 'react-konva';
import { Frame } from './draw/classes/Frame';
import { Sash } from './draw/classes/Sash';

function App() {

  const d = [
    new Frame(200, 300, 0, 0),
    new Sash(560, 258, 0, 0, 'fix', true)
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
