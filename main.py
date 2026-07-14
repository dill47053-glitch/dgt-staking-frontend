import ctypes
import streamlit as st
import os

# I-load ang engine
lib = ctypes.CDLL(os.path.abspath("TradingEngine.so"))

# I-define ang types
lib.calculateSMA.argtypes = [ctypes.POINTER(ctypes.c_double), ctypes.c_int, ctypes.c_int]
lib.calculateSMA.restype = ctypes.c_double
lib.calculateRSI.argtypes = [ctypes.POINTER(ctypes.c_double), ctypes.c_int, ctypes.c_int]
lib.calculateRSI.restype = ctypes.c_double

# --- DGT TOKEN DETAILS ---
DGT_LOGO_URL = "https://i.postimg.cc/FHcpQGs8/opengraph-image.png"
DGT_ADDRESS = "0x7353BA5DB88Cc9F2778aeDe8F17975f9c781edC6"

# Dashboard Layout
st.set_page_config(page_title="AI Trading Dashboard", layout="wide")

# Sidebar para sa Token Info
with st.sidebar:
    st.image(DGT_LOGO_URL, width=100)
    st.title("Digital Gold Token")
    st.subheader("Contract Address")
    st.code(DGT_ADDRESS, language="text")

st.title("AI Trading Dashboard")

sample_prices = [100.0, 102.0, 101.5, 103.0, 105.0, 107.0, 106.0]
period = 3

# Conversion para sa C++
arr = (ctypes.c_double * len(sample_prices))(*sample_prices)

col1, col2 = st.columns(2)
with col1:
    sma = lib.calculateSMA(arr, len(sample_prices), period)
    st.metric("SMA", f"{sma:.2f}")

with col2:
    rsi = lib.calculateRSI(arr, len(sample_prices), period)
    st.metric("RSI", f"{rsi:.2f}")