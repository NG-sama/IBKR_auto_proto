### **Application Flow Document: Interactive Brokers User Strategy Manager**  

---

### **1. Overview**  
This document outlines the flow of the application, describing the sequence of interactions between users and the system. It covers the main processes, UI flow, and backend interactions for core functionalities.

---

### **2. Key Application Modules**  
1. **Data Retrieval and Filtering**  
2. **Dashboard and Top Gainers Display**  
3. **Strategy Configuration**  
4. **Manual Trade Execution**  
5. **Strategy Monitoring**  
6. **Performance Reporting**  

---

### **3. Application Flow**  

#### **3.1 Start-Up**  
1. **Launch Application**  
   - User opens the application (desktop or web).  
   - Splash screen or login screen appears (if authentication is implemented).  

2. **Load Dashboard**  
   - The system retrieves the latest top gainers data from the database.  
   - Displays the summary of active strategies and their performance metrics.  

---

#### **3.2 Top Gainers Display (Data Retrieval and Filtering)**  
1. **Trigger:** System automatically fetches daily market data at the end of the trading session.  
2. **Process Flow:**  
   - Retrieve stock data from APIs (e.g., IBKR, Alpha Vantage).  
   - Filter SP500 stocks with daily gain > 5%.  
   - Save the filtered list in the database.  
3. **User Interaction:**  
   - User views the top gainers list on the dashboard.  
   - Clicking on a stock provides detailed metrics (e.g., price change, volume).  

---

#### **3.3 Strategy Setup**  
1. **Trigger:** User clicks the **"Setup Strategy"** button on the dashboard.  
2. **Process Flow:**  
   - User selects stocks from the top gainers list.  
   - User configures parameters:  
     - Stop-loss (%).  
     - Profit target (%).  
     - Time horizon (days).  
   - System validates inputs and saves the strategy configuration in the database.  
3. **User Interaction:**  
   - Form-based strategy setup page with dropdowns, sliders, or input fields.  
   - Confirmation dialog after strategy submission.  
4. **System Action:**  
   - Store strategy details in the database.  
   - Redirect user back to the dashboard with a success message.  

---

#### **3.4 Manual Trade Execution**  
1. **Trigger:** User clicks the **"Generate Trade Setup"** button after configuring a strategy.  
2. **Process Flow:**  
   - System generates a trade setup report containing:  
     - Stock symbols.  
     - Entry price (previous day’s close).  
     - Stop-loss and profit target thresholds.  
   - Report is downloadable as a PDF or CSV or can be copied to clipboard with a button.  
3. **User Interaction:**  
   - User downloads the trade setup report.  
   - Instructions provided for manual trade execution on IBKR.  

---

#### **3.5 Strategy Monitoring**  
1. **Trigger:** User selects the **"Monitor Strategies"** option on the dashboard.  
2. **Process Flow:**  
   - System retrieves active strategies from the database.  
   - Real-time stock price data is fetched from APIs.  
   - System calculates current performance metrics for each strategy:  
     - Unrealized P/L.  
     - Threshold breaches (stop-loss or profit target).  
   - Update strategy status: Active, Closed, Expired.  
3. **User Interaction:**  
   - Monitoring panel displays all active strategies with color-coded statuses (e.g., Green: Profitable, Red: Loss).  
   - Users can click on individual strategies for detailed performance metrics.  

---

#### **3.6 Performance Reporting**  
1. **Trigger:** User clicks the **"View Reports"** button on the dashboard.  
2. **Process Flow:**  
   - System retrieves historical strategy data from the database.  
   - Generates performance metrics:  
     - Total P/L.  
     - Strategy success rate.  
     - Best-performing strategies by ROI.  
   - Creates visual graphs (e.g., P/L trends, strategy comparison).  
3. **User Interaction:**  
   - User views detailed performance metrics in a tabular or graphical format.  
   - Reports are exportable as PDF or Excel files.  

---

### **4. UI Flow Diagram**  

1. **Dashboard**  
   - **Options:**  
     - View Top Gainers.  
     - Setup Strategy.  
     - Monitor Strategies.  
     - View Reports.  

2. **Top Gainers**  
   - Displays the previous day’s top gainers (>5% gain).  
   - Option to select stocks for strategy setup.  

3. **Strategy Setup**  
   - Stock selection.  
   - Input fields for stop-loss, profit target, and time horizon.  
   - Save configuration.  

4. **Trade Setup Report**  
   - Generate trade setup details for manual execution.  
   - Download options (PDF/CSV).  

5. **Monitoring Panel**  
   - List of active strategies.  
   - Real-time performance updates.  
   - Status indicators (Active, Closed, Expired).  

6. **Reports**  
   - Historical strategy data.  
   - P/L graphs and tabular performance metrics.  
   - Exportable reports.  

---

### **5. System Actions and Backend Interactions**  

| **Action**              | **Backend Process**                                   | **Output**                                |  
|-------------------------|-----------------------------------------------------|------------------------------------------|  
| Fetch Top Gainers       | Retrieve SP500 data, filter top gainers (>5%).      | Update database, display on dashboard.   |  
| Save Strategy           | Validate user inputs, save to database.            | Confirmation message.                    |  
| Monitor Strategies      | Fetch real-time data, update P/L, status.          | Display updated strategy performance.    |  
| Generate Report         | Retrieve historical data, compute metrics.         | Visual graphs, exportable reports.       |  

---

### **6. Navigation Flow**  
1. **Login Screen** (if applicable).  
   - Redirects to **Dashboard**.  

2. **Dashboard:**  
   - View top gainers > **Setup Strategy > Trade Setup Report**.  
   - View active strategies > **Monitoring Panel**.  
   - Historical performance > **Reports Page**.  

3. **Exit:**  
   - Close application or logout.  

---

### **7. Error Handling in Flow**  

#### **7.1 API Errors**  
- **Scenario:** Unable to fetch stock data.  
- **Resolution:** Retry mechanism with fallback error message.  

#### **7.2 Input Validation Errors**  
- **Scenario:** Invalid stop-loss or profit target values.  
- **Resolution:** Show descriptive error messages.  

#### **7.3 Trade Monitoring Delays**  
- **Scenario:** API latency causes real-time data delay.  
- **Resolution:** Notify user with last updated timestamp.  

---

### **8. Future Flow Extensions**  
1. **Automated Trade Execution:** Automate trades via IBKR API to eliminate manual input.  
2. **Multiple Strategies:** Allow users to configure and track multiple strategies simultaneously.  
3. **Multi-Market Support:** Expand beyond SP500 stocks.  
4. **Inrease number of accessible markets:** Allow Canadian and European stock markets to be added into trades. 