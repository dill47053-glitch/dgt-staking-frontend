export default function TradingIndicator() {
  // Dummy data muna para pumasa sa Vercel build
  const indicators = {
    sma: "1.25",
    rsi: "65",
    macd: "0.45",
    bollinger: "1.30"
  };

  return (
    <div className="text-white">
      <p>SMA: {indicators.sma}</p>
      <p>RSI: {indicators.rsi}</p>
      <p>MACD: {indicators.macd}</p>
      <p>Bollinger Upper: {indicators.bollinger}</p>
    </div>
  );
}