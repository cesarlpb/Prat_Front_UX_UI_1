import { useEffect, useRef, useState } from 'react';

export default function FPSMeter() {
  const [fps, setFps] = useState(0);
  const frames = useRef(0);
  const last = useRef(performance.now());

  useEffect(() => {
    let rafId;

    const loop = (time) => {
      frames.current += 1;
      if (time >= last.current + 1000) {
        setFps(frames.current);
        frames.current = 0;
        last.current = time;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const containerStyle = {
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    width: 'max-content',
    fontFamily: 'system-ui, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <strong>FPS:</strong> {fps}
    </div>
  );
}