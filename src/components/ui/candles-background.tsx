import React from 'react';

function generateRandomCandle(index: number) {
  const isGreen = Math.random() > 0.5;
  const color = isGreen ? "#4CAF50" : "#F44336";
  const x = 5 + index * 10;
  
  const totalHeight = Math.random() * 20 + 10;
  const bodyHeight = Math.random() * 3 + 2;
  const wickHeight = Math.random() * 5 + 2;
  
  const bodyStart = (totalHeight - bodyHeight) / 2;
  const bodyEnd = bodyStart + bodyHeight;
  
  const hasTopWick = Math.random() > 0.3;
  const hasBottomWick = Math.random() > 0.3;

  const verticalOffset = Math.random() * 15;

  return (
    <g key={index} transform={`translate(0, ${verticalOffset})`}>
      {/* Top wick */}
      {hasTopWick && (
        <line 
          x1={x} y1={bodyStart - wickHeight} 
          x2={x} y2={bodyStart} 
          stroke={color} 
          strokeWidth="0.2"
        />
      )}
      {/* Candle body */}
      <rect 
        x={x - 1.5} // Increased width of the candle body
        y={bodyStart} 
        width="3" // Increased width of the candle body
        height={bodyHeight} 
        fill={color} 
      />
      {/* Bottom wick */}
      {hasBottomWick && (
        <line 
          x1={x} y1={bodyEnd} 
          x2={x} y2={bodyEnd + wickHeight} 
          stroke={color} 
          strokeWidth="0.2"
        />
      )}
    </g>
  );
}

export default function CandlesBackground() {
  const candleCount = 10;
  const [candles, setCandles] = React.useState<React.ReactNode[]>([]);

  React.useEffect(() => {
    setCandles(Array.from({ length: candleCount }, (_, i) => generateRandomCandle(i)));
  }, []);

  return (
    <div className="absolute inset-0 z-10 opacity-20 flex items-center">
      <svg 
        className="w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 40"
      >
        {candles}
      </svg>
    </div>
  );
}

