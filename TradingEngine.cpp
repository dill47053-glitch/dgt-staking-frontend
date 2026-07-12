#include <vector>
#include <cmath>
#include <numeric>

extern "C" {

    // Existing MA (Moving Average)
    double calculateMA(double* prices, int size, int period, int type) {
        if (size < period) return 0.0;
        double sum = 0.0;
        for (int i = size - period; i < size; i++) sum += prices[i];
        return sum / period;
    }

    // Existing RSI (Simplified)
    double calculateRSI(double* prices, int size, int period) {
        if (size < period) return 50.0;
        double gain = 0.0, loss = 0.0;
        for (int i = size - period + 1; i < size; i++) {
            double diff = prices[i] - prices[i-1];
            if (diff >= 0) gain += diff;
            else loss -= diff;
        }
        double rs = (loss == 0) ? 100 : (gain / loss);
        return 100 - (100 / (1 + rs));
    }

    // NEW: MACD calculation (simplified Fast - Slow)
    double calculateMACD(double* prices, int size, int fastPeriod, int slowPeriod) {
        if (size < slowPeriod) return 0.0;
        // Dito natin kinukuha ang EMA (Simplified using SMA for now)
        return calculateMA(prices, size, fastPeriod, 0) - calculateMA(prices, size, slowPeriod, 0);
    }

    // NEW: Bollinger Bands (Upper Band)
    double calculateBollingerUpper(double* prices, int size, int period, double multiplier) {
        if (size < period) return 0.0;
        double sum = 0.0;
        for(int i = size - period; i < size; i++) sum += prices[i];
        double sma = sum / period;
        
        double sq_sum = 0.0;
        for(int i = size - period; i < size; i++) sq_sum += pow(prices[i] - sma, 2);
        double stdev = sqrt(sq_sum / period);
        
        return sma + (multiplier * stdev);
    }
}