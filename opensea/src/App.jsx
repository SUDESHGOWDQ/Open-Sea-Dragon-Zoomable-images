// App.js or any parent component
import React from 'react';
import OpenSeadragonViewer from './OpenSeadragonViewer';

const App = () => {
  const tileSource = {
    type: 'image',
    url: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_1280.jpg', // or .jpg
  };

  return (
    <div>
      <h2>OpenSeadragon in React</h2>
      <OpenSeadragonViewer tileSource={tileSource} />
    </div>
  );
};

export default App;
