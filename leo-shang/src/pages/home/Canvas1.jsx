import React, { useState, useRef, useEffect } from 'react';
import './../App.css';

const Canvas1 = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [color, setColor] = useState('#000');
  const [pixelSize, setPixelSize] = useState(5);
  const [prevPos, setPrevPos] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext('2d');
    setCtx(context);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const { clientX, clientY } = e;
    const { x, y } = getCanvasCoords(clientX, clientY);
    setPrevPos({ x, y });
    drawPixel(x, y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setPrevPos(null);
  };

  const drawPixel = (x, y) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, pixelSize, pixelSize);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { clientX, clientY } = e;
    const { x, y } = getCanvasCoords(clientX, clientY);

    if (prevPos) {
      const { x: prevX, y: prevY } = prevPos;
      drawLine(prevX, prevY, x, y);
    }

    setPrevPos({ x, y });
  };

  const getCanvasCoords = (clientX, clientY) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const drawLine = (x1, y1, x2, y2) => {
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = x1 < x2 ? 1 : -1;
    const sy = y1 < y2 ? 1 : -1;
    let err = dx - dy;

    while (true) {
      drawPixel(x1, y1);
      if (x1 === x2 && y1 === y2) break;
      const e2 = err * 2;
      if (e2 > -dy) {
        err -= dy;
        x1 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y1 += sy;
      }
    }
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const saveCanvas = () => {
    const dataUrl = canvasRef.current.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'sketch.png';
    link.click();
  };

  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseOut={stopDrawing}
        id="canvas"
      ></canvas>
      <div className="nav">
        <div className="clr" data-clr="#000" onClick={() => setColor('#000')}></div>
        <div className="clr" data-clr="red" onClick={() => setColor('red')}></div>
        <div className="clr" data-clr="orange" onClick={() => setColor('orange')}></div>
        <div className="clr" data-clr="blue" onClick={() => setColor('blue')}></div>
        <div className="clr" data-clr="purple" onClick={() => setColor('purple')}></div>
        <div className="clr" data-clr="yellowgreen" onClick={() => setColor('yellowgreen')}></div>
        <div className="clr" data-clr="yellow" onClick={() => setColor('yellow')}></div>
        <div className="clr" data-clr="#fff" onClick={() => setColor('#fff')}></div>
        <button className="clear" onClick={clearCanvas}>Clear</button>
        <button className="save" onClick={saveCanvas}>Save</button>
        <input
          type="color"
          id="favcolor"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="range"
          id="ageInputId"
          value={pixelSize}
          min="1"
          max="20"
          onChange={(e) => setPixelSize(parseInt(e.target.value, 10))}
        />
        <output id="ageOutputId">{pixelSize}</output>
        <div className="emoji">🎨</div>
      </div>
    </div>
  );
}

export default Canvas1;