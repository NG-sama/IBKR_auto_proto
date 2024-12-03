### **Strategy Performance Page Layout**

#### **1. Overview**
The **Strategy Performance Page** provides an overview of past and active strategies, displaying performance metrics, key insights, and trade-specific details. The page will include visualizations and tabular data for easy analysis.

---

### **2. Layout Structure**

#### **2.1 Sections**
1. **Header (Title and Summary)**  
2. **Performance Metrics Overview**  
3. **Performance Visualizations**  
4. **Strategy Details Table**  
5. **Filters and Actions**

---

### **2.2 Detailed Layout**

---

#### **Header (Title and Summary)**  
- **Title:** "Strategy Performance Overview"  
- **Subtext:**  
  - "Analyze your trading strategies over selected timeframes to understand performance and refine your approach."

---

#### **Performance Metrics Overview**  
- **Position:** At the top of the page, directly below the header.  
- **Content:**  
  - Display key performance indicators (KPIs) in cards:  
    1. **Total Strategies:** [Number]  
    2. **Success Rate:** [%]  
    3. **Realized P/L:** [$ Amount]  
    4. **Unrealized P/L:** [$ Amount]  
    5. **Best Performing Strategy:** [Name or ID, with % P/L]  

- **Design:**  
  - Use a row of horizontally aligned cards with icons for each metric.

---

#### **Performance Visualizations**  
- **Position:** Below the metrics section.  
- **Content:**  
  - **Chart 1:** **P/L Over Time** (Line Chart)  
    - X-Axis: Time (e.g., days or weeks).  
    - Y-Axis: Profit/Loss ($).  
  - **Chart 2:** **Strategy Success Rates** (Pie Chart)  
    - Segments: Successful, Neutral, Failed strategies.  
  - **Chart 3:** **Stock-Level Performance** (Bar Chart)  
    - X-Axis: Stocks.  
    - Y-Axis: Profit/Loss ($).  

- **Actions:**  
  - Buttons to export charts or download raw data (e.g., "Download CSV").

---

#### **Strategy Details Table**  
- **Position:** Below the visualizations.  
- **Content:**  
  - **Columns:**  
    1. **Strategy Name/ID:** [e.g., Strategy 001].  
    2. **Stocks Involved:** [Tickers, e.g., AAPL, MSFT].  
    3. **Configured Parameters:** (Stop-loss, Profit Target, Time Horizon).  
    4. **Status:** (Active, Closed, Expired).  
    5. **Realized P/L:** [$ Amount].  
    6. **Unrealized P/L:** [$ Amount].  
    7. **Success Rate:** [% or Win/Loss].  

- **Actions:**  
  - Search bar for filtering strategies by name or ID.  
  - Sorting options (e.g., by P/L, status, or time horizon).  
  - Expandable rows to display individual trade details.

---

#### **Filters and Actions**  
- **Position:** Floating at the top-right corner of the page.  
- **Content:**  
  - **Filters:**  
    - Timeframe: Last 7 days, 30 days, custom range.  
    - Strategy Status: Active, Closed, Expired.  
    - Stock Ticker: Dropdown or search.  
  - **Actions:**  
    - Button: "Export Report" (Generates a PDF or Excel file).  

---

### **3. Visual Representation**

#### **Wireframe Layout**  
```
+-------------------------------------------------------------+
| Header: "Strategy Performance Overview"                    |
| Subtext: "Analyze your trading strategies..."              |
+-------------------------------------------------------------+
| Metrics Overview:                                           |
| ----------------------------------------------------------  |
| | Total Strategies | Success Rate | Realized P/L | Best   | |
| |        [5]       |     [75%]    |   [$12,000]  |  ...   | |
| ----------------------------------------------------------  |
+-------------------------------------------------------------+
| Visualizations:                                             |
| ----------------------------------------------------------  |
| | P/L Over Time | Strategy Success Rate | Stock-Level Perf | |
| ----------------------------------------------------------  |
+-------------------------------------------------------------+
| Strategy Details Table:                                     |
| ----------------------------------------------------------  |
| | ID  | Stocks  | Stop-Loss | Profit Target | Status | P/L | |
| | 001 | AAPL    |   20%     |    10%        | Active | ... | |
| | 002 | MSFT    |   15%     |    12%        | Closed | ... | |
| ----------------------------------------------------------  |
+-------------------------------------------------------------+
| Filters & Actions:                                          |
| ----------------------------------------------------------  |
| | Timeframe: [Dropdown] | Export Report: [Button]          | |
| ----------------------------------------------------------  |
+-------------------------------------------------------------+
```

---

### **4. Style Recommendations**

1. **Color Scheme:**  
   - Use green for positive performance and red for losses.  
   - Neutral tones for table and filter backgrounds.  
2. **Typography:**  
   - Use bold headers for KPIs and charts.  
3. **Interactive Elements:**  
   - Add tooltips on KPIs and charts for detailed insights.  
   - Enable row expansion in the table for detailed trade data.  
4. **Responsive Design:**  
   - Ensure proper layout adjustment for smaller screens.
