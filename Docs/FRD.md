### **Functionality Document: Interactive Brokers User Strategy Manager**  

#### **1. Overview**  
The system focuses on enabling users to configure, monitor, and assess trading strategies for SP500 stocks through Interactive Brokers (IBKR). It includes automated stock identification, strategy configuration, manual trade execution support, performance monitoring, and historical reporting.

---

### **2. Functional Modules and Features**  

#### **2.1 Data Retrieval**  
- **Description:**  
  Automates fetching of SP500 stock data to identify top gainers exceeding 5% daily returns.  

- **Features:**  
  - **Source APIs:** Interactive Brokers API, Market Data API (Yahoo Finance).  
  - **Processing:** Filter SP500 stocks for daily gain > 5%.  
  - **Storage:** Save results to a local database (Supabase).  
  - **Schedule:** Executes daily after market close to update stock lists.  

- **Inputs:**  
  - API credentials.  
  - SP500 stock ticker list (predefined).  

- **Outputs:**  
  - SP500 stock ticker list with relevant metrics (e.g., closing price, daily % gain).
  - Filtered list of top gainers with relevant metrics (e.g., closing price, daily % gain).  

---

#### **2.2 Strategy Setup**  
- **Description:**  
  Allows users to configure trading strategies based on selected stocks from the top gainers list.  

- **Features:**  
  - Select stocks from the previous day’s gainer list.  
  - Define parameters:  
    - **Stop-Loss (%)**: Threshold for exiting losing trades.  
    - **Profit Target (%)**: Threshold for closing profitable trades.  
    - **Time Horizon**: Duration to keep the trade active (e.g., 5 trading days).  
  - Save strategy configurations in the database.  

- **Inputs:**  
  - Selected stock(s).  
  - User-defined stop-loss and profit target values.  
  - Investment amount or percentage.  

- **Outputs:**  
  - Saved strategy configuration linked to specific stocks.  

---

#### **2.3 Manual Trade Execution**  
- **Description:**  
  Provides trade setup details to the user for manual execution via IBKR.  

- **Features:**  
  - Generate a trade configuration report:  
    - Stock symbols.  
    - Entry price (previous day’s close).  
    - Stop-loss and profit thresholds.  
  - Export options: Copy to clipboard or PDF or CSV.  
  - Step-by-step instructions for executing trades in IBKR.  

- **Inputs:**  
  - Strategy configurations.  

- **Outputs:**  
  - Exportable trade setup data for user execution.  

---

#### **2.4 Strategy Monitoring**  
- **Description:**  
  Tracks and updates the performance of active strategies daily.  

- **Features:**  
  - Pull real-time stock data to monitor open positions.  
  - Calculate performance metrics:  
    - Unrealized P/L for active strategies.  
    - Realized P/L for closed strategies.  
  - Update strategy status:  
    - Active, Expired (after time horizon), or Closed (stop-loss/profit target hit).  

- **Inputs:**  
  - Strategy configurations.  
  - Real-time stock price data from APIs.  

- **Outputs:**  
  - Updated strategy status and performance metrics.  

---

#### **2.5 Performance Metrics and Reporting**  
- **Description:**  
  Provides detailed metrics and historical reports to analyze user strategies.  

- **Features:**  
  - Key metrics:  
    - Total P/L.  
    - Strategy success rate (% profitable trades).  
    - Best-performing strategy (based on ROI).  
  - Historical data visualization:  
    - Graphs showing P/L trends over time.  
  - Export reports (PDF/Excel).  

- **Inputs:**  
  - Strategy history from the database.  

- **Outputs:**  
  - Tabular and graphical performance summaries.  
  - Exportable reports.  

---

### **3. Workflow Details**  

#### **3.1 Daily Workflow**  
1. **End-of-Day Stock Screening:**  
   - Fetch and filter SP500 stocks with >5% daily gains.  
   - Update the top gainers list in the database.  

2. **Strategy Setup:**  
   - User selects stocks (from full SP500 list or gainer list) and configures a strategy (stop-loss, profit target, time horizon).  
   - Strategy saved in the database.  

3. **Manual Trade Execution:**  
   - Generate trade setup details for the user.  
   - User manually executes trades via IBKR.  

4. **Monitoring:**  
   - Track real-time stock performance and update strategy statuses.  

5. **Reporting:**  
   - Generate daily updates and end-of-period reports on strategy performance.  

---

### **4. User Interactions**  

#### **4.1 Dashboard**  
- Display top gainers from the previous trading day.  
- Summary of active strategies (e.g., total P/L, number of trades).  
- Access links for strategy setup, monitoring, and reports.  

#### **4.2 Strategy Configuration**  
- Form to select stocks and define stop-loss/profit parameters.  
- Save and confirm strategy details.  

#### **4.3 Monitoring Panel**  
- List of active strategies with real-time updates on performance.  
- Filters to view strategies by status (Active, Closed, Expired).  

#### **4.4 Reports**  
- Tabular and graphical representations of historical performance.  
- Download options (PDF/Excel).  

---

### **5. Error Handling**  

#### **5.1 Data Retrieval Errors**  
- **Issue:** API connection failure.  
- **Resolution:** Retry mechanism with alerts if the issue persists.  

#### **5.2 User Input Errors**  
- **Issue:** Invalid strategy parameters (e.g., negative stop-loss).  
- **Resolution:** Input validation with descriptive error messages.  

#### **5.3 Monitoring Errors**  
- **Issue:** API latency causing delayed updates.  
- **Resolution:** Notify user of real-time tracking limitations.  

---

### **6. Security Considerations**  
1. **API Key Management:**  
   - Securely store API keys using environment variables or encrypted local storage.  

2. **User Data Protection:**  
   - Encrypt user configurations and strategy data.  

3. **Access Control:**  
   - Restrict database access to authorized application modules.  

---

### **7. Success Criteria**  
- Accurate identification of top gainers daily.  
- Smooth and intuitive strategy configuration process.  
- Reliable tracking of strategy performance and comprehensive reporting.  
