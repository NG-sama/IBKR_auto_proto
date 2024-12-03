Here’s a proposed **dashboard page layout** for your trading system. The design emphasizes functionality and simplicity to ensure all key information is accessible at a glance.

---

### **Dashboard Page Layout**  

#### **1. Header Section**  
**Position:** Top  
**Content:**  
- **Logo:** On the left (your custom branding or app name).  
- **Page Title:** "Trading Dashboard."  
- **User Profile:** User name with account settings dropdown.  
- **Notifications Icon:** Alerts for significant events (e.g., stop-loss hit, profit targets achieved).  
- **Date & Time:** Current date and trading time (real-time).  

---

#### **2. Key Performance Indicators (KPIs) Section**  
**Position:** Below the header  
**Content:**  
- **Account Balance:** Available cash balance in the IBKR account.  
- **Total Investment:** Total capital allocated to current positions.  
- **Daily P/L:** Realized and unrealized profit/loss for the day.  
- **Number of Positions:** Total number of active trades.  
- **Market Status:** Market open/closed indicator with countdown to open/close.  

---

#### **3. Main Panel**  

##### **3.1. Top Gainers List**  
**Position:** Left side of the main panel  
**Content:**  
- **Table Headers:**  
  - Stock Symbol  
  - Company Name  
  - Daily % Gain (previous day)  
  - Price (closing price of the previous day)  
- **Interactive Features:**  
  - Clickable stock symbols for more details (redirects to a detailed stock page).  
  - Filter/Sort options (e.g., sort by % gain).  

##### **3.2. Active Positions**  
**Position:** Center of the main panel  
**Content:**  
- **Table Headers:**  
  - Stock Symbol  
  - Entry Price  
  - Current Price  
  - % Change  
  - Stop-Loss Price  
  - Profit Target Price  
  - P/L (absolute and percentage)  
- **Interactive Features:**  
  - **Adjust Stop-Loss/Profit Target:** Inline editing or slider for manual adjustments.  
  - **Close Position:** Button to exit the trade immediately.  

##### **3.3. Portfolio Summary Chart**  
**Position:** Right side of the main panel  
**Content:**  
- **Chart Type:** Pie chart or bar chart.  
- **Details:**  
  - Allocation by stock.  
  - P/L breakdown (e.g., gainers vs. losers).  

---

#### **4. Trade History Section**  
**Position:** Below the main panel  
**Content:**  
- **Table Headers:**  
  - Stock Symbol  
  - Entry Date/Time  
  - Exit Date/Time  
  - Entry Price  
  - Exit Price  
  - P/L  
- **Interactive Features:**  
  - Export button to download trade history as CSV/Excel.  
  - Filter by date range, stock, or profit/loss status.  

---

#### **5. Settings & Controls Panel**  
**Position:** Sidebar (collapsible)  
**Content:**  
- **Thresholds:**  
  - Adjust stop-loss (default: 20%).  
  - Adjust profit target (default: 10%).  
- **Daily Gainers Filter:**  
  - Min. % gain (default: 5%).  
  - Max number of stocks to trade.  
- **API Settings:** IBKR and market data API keys and configurations.  
- **Trading Schedule:**  
  - Start and end time for automated trading.  
  - Toggle for enabling/disabling auto-trading.  

---

#### **6. Footer Section**  
**Position:** Bottom  
**Content:**  
- **Version Info:** Software version number.  
- **Contact Info:** Support email/phone number.  
- **Legal Disclaimer:** Standard trading risk disclaimer.  

---

### **Wireframe Visualization**

```
+------------------------------------------------------+
| Logo     Trading Dashboard        [User Profile]     |
| Date/Time                                       Alerts|
+------------------------------------------------------+
| Account Balance | Total Investment | Daily P/L       |
| Number of Positions | Market Status (Open/Closed)    |
+------------------------------------------------------+
| Top Gainers      | Active Positions      | Portfolio |
| +---------------+| +------------------+ | +---------+|
| | Symbol | %Gain | | Symbol | Entry Px | | Chart    ||
| | Name   | Px    | | Px Now | P/L      | | (Pie/Bar)|
| +---------------+| +------------------+ | +---------+|
+------------------------------------------------------+
|                 Trade History                        |
| +--------------------------------------------------+ |
| | Symbol | Entry Px | Exit Px | P/L | Date Range    | |
| +--------------------------------------------------+ |
+------------------------------------------------------+
| Settings | Controls (Sidebar) | Version | Support   |
+------------------------------------------------------+
```

Let me know if you'd like me to refine the design further or focus on any specific area!