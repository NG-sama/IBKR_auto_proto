### **Project Requirements Document (PRD)**
#### **Project Title:**  
Interactive Brokers Automated Trading System for SP500 Top Gainers  

#### **Version:**  
1.0  

#### **Date:**  
02 Decemeber 2024  

#### **Prepared By:**  
Nikhil Gnanavel [LinkedIn](https://www.linkedin.com/in/nikhil-gnanavel/)  

---

### **1. Project Overview**  

The goal is to develop a software application that enables users to configure and manage trading strategies using an Interactive Brokers (IBKR) trading account. The software will allow users to set up a single strategy to implement over a specific time frame, monitor all strategy implementations, and provide detailed performance metrics to identify the best-performing strategies.  

All trading strategies will focus exclusively on SP500 stocks. The software will showcase the top gainers from the previous trading day (stocks with daily gains exceeding 5%), facilitate strategy setup with user-defined profit and stop-loss thresholds, and provide functionality for manual trade execution via IBKR.  

---

### **2. Objectives**  
1. Automate the retrieval of market data from Interactive Brokers or relevant financial APIs.  
2. Identify SP500 stocks that gained more than 5% in the previous trading session.  
3. Enable users to configure strategies with custom stop-loss and profit margin parameters over a defined time horizon.  
4. Support manual trade execution for selected strategies the following trading day via IBKR.  
5. Monitor and update active strategies daily, allowing users to use IBKR to track real-time positions.  
6. Provide performance metrics for implemented strategies, highlighting the best-performing setups over user-specified periods.  

---

### **3. Functional Requirements**  

#### **3.1 Data Retrieval**  
- **Source:** IBKR API and/or third-party market data APIs (e.g., Alpha Vantage, Yahoo Finance).  
- **Filter:** Retrieve SP500 stocks with daily price gains exceeding 5%.  
- **Frequency:** Daily retrieval based on market close data.  

#### **3.2 Strategy Setup**  
- **Inputs:**  
  - Selected stocks from the top gainers list.  
  - Stop-loss percentage (e.g., 20%).  
  - Profit target percentage (e.g., 10%).  
  - Time horizon (e.g., 5 trading days or until the trade is closed).  

#### **3.3 Trade Execution**  
- **Manual Execution:** Generate trade setup details for manual execution in IBKR.  
- **Support Materials:** Provide clear instructions or exportable trade configurations for IBKR users.  

#### **3.4 Monitoring and Reporting**  
- **Real-Time Monitoring:**  
  - Keep track of strategy performance based on current stock prices and configured thresholds.  
- **Metrics and Reports:**  
  - P/L per strategy (realized and unrealized).  
  - Success rate (percentage of profitable strategies).  
  - Best-performing strategy over user-defined timeframes.  

#### **3.5 Historical Strategy Tracking**  
- **Storage:** Retain executed strategies and their performance data for up to 5 trading days or until trade closure (whichever is later).  
- **Visualization:** Graphical representation of historical performance for user review.  

---

### **4. Technical Requirements**  

#### **4.1 Platform**  
- **Environment:** Local machine (Windows/MacOS/Linux).  
- **Programming Language:** Python preferred for backend. Frontend may use lightweight frameworks like Tkinter (desktop) or Flask (basic web app).  

#### **4.2 APIs and Tools**  
- **Interactive Brokers API:** For trading and portfolio management.  
- **Market Data API:** For real-time and historical stock data (e.g., Alpha Vantage, Yahoo Finance, or IBKR's market data).  
- **Database:**  
  - **Primary Functional Databases:**  
    - Supabase for storing stock data, trade logs, and performance metrics.  
  - **User Trading History:**  
    - Supabase for storing historical strategy performance data.  

#### **4.3 Software Architecture**  
- **Modules:**  
  - **Data Fetcher:** Retrieves market data.  
  - **Strategy Engine:**  
    - Identifies qualifying stocks (top gainers > 5%).  
    - Tracks executed strategies for up to 5 trading days or until closed.  
  - **Trade Executor:** Provides trade setup instructions for manual execution.  
  - **Monitor:** Tracks and updates active strategy performance.  
  - **Report Generator:** Produces strategy performance metrics and audit reports.  

- **Deployment:** Local machine.  

---

### **5. Non-Functional Requirements**  
1. **Reliability:** Ensure data retrieval and strategy tracking operate without disruptions.  
2. **Performance:** Process data and provide strategy results promptly (within minutes of user action).  
3. **Security:** Protect user data, including API keys and strategy configurations, using encryption and secure storage practices.  
4. **Ease of Use:** Intuitive interface for strategy configuration, monitoring, and reporting.  

---

### **6. User Interface (UI)**  

#### **6.1 Dashboard**  
- **Key Features:**  
  - List of top gainers (>5%) from the previous trading day.  
  - Summary of active strategies and their performance.  
  - Key performance metrics (e.g., total profit, best-performing strategy).  

#### **6.2 Strategy Configuration Panel**  
- **Interactive Form:** Allows users to set custom stop-loss, profit targets, and time horizons.  

#### **6.3 Strategy Performance Page**  
- **Visuals:**  
  - P/L trends (graphs).  
  - Strategy rankings (based on ROI).  

---

### **7. Risks and Assumptions**  

#### **7.1 Risks**  
1. Errors in data retrieval or filtering may affect strategy reliability.  
2. Manual trade execution increases user dependence and error potential.  
3. API limitations or connectivity issues may disrupt real-time updates.  

#### **7.2 Assumptions**  
1. Users have valid Interactive Brokers accounts with API permissions enabled.  
2. The stock market operates under normal conditions.  

---

### **8. Development Timeline**  

| **Phase**              | **Tasks**                                        | **Duration** |  
|-------------------------|-------------------------------------------------|--------------|  
| Requirement Analysis    | Finalize requirements and technical stack       | 1 week       |  
| API Integration         | Connect to IBKR and market data APIs            | 2 weeks      |  
| Strategy Implementation | Develop strategy configuration and monitoring   | 3 weeks      |  
| UI/UX Development       | Build and test the interface                    | 2 weeks      |  
| Testing and Debugging   | Unit testing, integration testing, and bug fixes| 2 weeks      |  
| Deployment              | Configure and deploy software locally           | 1 week       |  

---

### **9. Success Metrics**  
1. Accurate identification of top gainers (>5%) daily.  
2. User-friendly strategy configuration and tracking.  
3. Reports showcasing best-performing strategies based on user-defined timeframes.  

---  