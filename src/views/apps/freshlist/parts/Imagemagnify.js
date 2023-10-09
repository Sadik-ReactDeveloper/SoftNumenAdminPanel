// import React, { useState } from "react";
// import "./Magnify.css"; // Create a CSS file for styling

// const MagnifyImage = ({ imageSrc }) => {
//   const [scale, setScale] = useState(1);

//   const handleZoomIn = () => {
//     setScale(scale + 0.1); // Increase the scale factor
//   };

//   const handleZoomOut = () => {
//     if (scale > 0.2) {
//       setScale(scale - 0.1); // Decrease the scale factor, but ensure it doesn't go below 0.2
//     }
//   };

//   return (
//     <div className="magnify-image">
//       <div className="zoom-controls">
//         <button onClick={handleZoomIn}>+</button>
//         <button onClick={handleZoomOut}>-</button>
//       </div>
//       <img
//         src={imageSrc}
//         alt="Image"
//         style={{ transform: `scale(${scale})` }}
//       />
//     </div>
//   );
// };

// export default MagnifyImage;

import React, { useState, useEffect } from "react";
import "./Magnify.css"; // Create a CSS file for styling

const ImageZoom = ({ imageSrc }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // Scroll down
        if (!e.shiftKey) {
          // Normal scrolling, zoom out vertically
          setScale((prevScale) =>
            prevScale > 0.2 ? prevScale - 0.1 : prevScale
          );
        } else {
          // Shift key + scrolling, zoom out faster
          setScale((prevScale) =>
            prevScale > 0.1 ? prevScale - 0.2 : prevScale
          );
        }
      } else if (e.deltaY < 0) {
        // Scroll up
        if (!e.shiftKey) {
          // Normal scrolling, zoom in vertically
          setScale((prevScale) => prevScale + 0.1);
        } else {
          // Shift key + scrolling, zoom in faster
          setScale((prevScale) => prevScale + 0.2);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.1);
  };

  const handleZoomOut = () => {
    setScale((prevScale) => (prevScale > 0.2 ? prevScale - 0.1 : prevScale));
  };

  const handleMove = (direction) => {
    if (direction === "up") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y - 10,
      }));
    } else if (direction === "down") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + 10,
      }));
    } else if (direction === "left") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x - 10,
      }));
    } else if (direction === "right") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + 10,
      }));
    }
  };

  const handleImageClick = (e) => {
    // Calculate the zoom position based on the click coordinates
    const boundingBox = e.target.getBoundingClientRect();
    const clickX = e.clientX - boundingBox.left;
    const clickY = e.clientY - boundingBox.top;

    // Calculate the offsets based on the current scale
    const xOffset = (clickX - boundingBox.width / 2) * (scale - 1);
    const yOffset = (clickY - boundingBox.height / 2) * (scale - 1);

    setScale(2); // Example: Zoom level when clicking
    setPosition((prevPosition) => ({
      x: prevPosition.x - xOffset,
      y: prevPosition.y - yOffset,
    }));
  };

  return (
    <div className="image-zoom-container">
      <div className="zoom-controls">
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
        <button onClick={() => handleMove("up")}>&uarr;</button>
        <button onClick={() => handleMove("down")}>&darr;</button>
        <button onClick={() => handleMove("left")}>&larr;</button>
        <button onClick={() => handleMove("right")}>&rarr;</button>
      </div>
      <div className="image-zoom">
        <img
          src={imageSrc}
          alt="Image"
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            width: "100%", // Keep the width at 100%
          }}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default ImageZoom;
