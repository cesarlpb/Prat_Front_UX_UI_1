import React, { useLayoutEffect, useRef, useState } from 'react';

function ResizeBox() {
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const newWidth = entry.contentRect.width;
          const newHeight = entry.contentRect.height;
          setBoxWidth(newWidth);
          setBoxHeight(newHeight);
        }
      });

      resizeObserver.observe(boxRef.current);

      // Limpieza al desmontar
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    
    <div style={{ padding: '20px' }}>
      <div
      
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          resize: 'both',
          overflow: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          border: '0px solid red',
          borderRadius: '4px',
        }}
      >
        CAMBIA EL TAMAÑO DE LA CAJA
      </div>
      <p>Ancho calculado con useLayoutEffect: {boxWidth}px</p>
      <p>Ancho calculado con useLayoutEffect: {boxHeight}px</p>
    </div>
  );
}

export default ResizeBox;
