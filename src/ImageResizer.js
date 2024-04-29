import React, { useState } from 'react'
 import Dog from './images/Dog.JPG'; 

const ImageResizer = () => {
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });

  const handleWidthChange = (e) => {
    setDimensions({ ...dimensions, width: e.target.value });
  };

  const handleHeightChange = (e) => {
    setDimensions({ ...dimensions, height: e.target.value });
  };

  return (
    <div>
      <h2></h2>
      <label>
        Width
        <input
          type="range"
          value={dimensions.width}
          onChange={handleWidthChange}
          min="50"
          max="200"
        />
      </label>
      <label>
        Height
        <input
          type="range"
          value={dimensions.height}
          onChange={handleHeightChange}
          min="50"
          max="200"
        />
      </label>
      <img
         src={Dog}
        alt="Resizable"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`
        }}
      />
    </div>
  );
};

export default ImageResizer;
