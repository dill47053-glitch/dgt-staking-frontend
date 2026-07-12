'use client';
import { useState, useEffect } from 'react';

export default function TradingIndicator() {
  const [data, setData] = useState({ sma: 0, rsi: 0 });

  useEffect(() => {
    // Tawagin ang ating local FastAPI server
    fetch('http://127.0.0.1:8000/api/indicators', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prices: [100.0, 102.0, 101.5, 103.0, 105.0, 107.0, 106.0], 
        period: 3 
      }),
    })
    .then(res => res.json())
    .then(data => setData(data));
  }, []);

  return (
    // Sa loob ng iyong return statement
<div className="text-white">
  <p>SMA: {indicators.sma}</p>
  <p>RSI: {indicators.rsi}</p>
  <p>MACD: {indicators.macd}</p>
  <p>Bollinger Upper: {indicators.bollinger}</p>
   const [indicators, setIndicators] = useState({ sma: 0, rsi: 0, macd: 0, bollinger: 0 });
</div>