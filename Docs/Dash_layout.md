### **Dashboard Page Layout**

#### **1. Overview**
The dashboard is the central hub where users can access top gainers, monitor active strategies, view performance summaries, and navigate to other key modules. It should prioritize clarity, usability, and real-time updates.

---

### **2. Layout Structure**

#### **2.1 Page Sections**
1. **Header (Top Bar)**
2. **Main Content**
   - **Top Gainers Section**
   - **Active Strategies Overview**
   - **Performance Summary**
3. **Sidebar (Navigation Menu)**
4. **Footer**

---

### **2.2 Detailed Layout**

#### **2.2.1 Header (Top Bar)**
- **Position:** Fixed at the top of the page.
- **Content:**
  - **Logo** (Left): Application logo or branding.
  - **User Info** (Right):  
    - User name/avatar.  
    - Settings icon.  
    - Logout button.
  - **Refresh Button** (Optional): Manually reload data.

---

#### **2.2.2 Sidebar (Navigation Menu)**
- **Position:** Fixed vertically on the left.
- **Content:**
  - **Navigation Links:**
    - Dashboard (Active).
    - Setup Strategy.
    - Monitor Strategies.
    - Reports.
  - **Help & Support:**  
    - Link to user guide or help documentation.

---

#### **2.2.3 Main Content**
- **Position:** Central area of the screen.
- **Content Sections:**

---

##### **(A) Top Gainers Section**
- **Title:** "Top Gainers (>5%) - Previous Trading Day"
- **Content:**
  - **Stock Table:**
    - Columns:
      1. Ticker Symbol
      2. Company Name
      3. % Gain
      4. Closing Price
      5. Volume
    - **Action Column:**  
      - Checkbox for selecting stocks for strategy setup.
  - **CTA Button:**  
    - "Setup Strategy" (Redirects to Strategy Configuration).

- **Design:** Horizontal card layout or table view.

---

##### **(B) Active Strategies Overview**
- **Title:** "Active Strategies"
- **Content:**
  - **Summary Cards:**  
    - Total Active Strategies: [Count]  
    - Realized P/L: [Value]  
    - Unrealized P/L: [Value]
  - **Strategies Table:**
    - Columns:
      1. Strategy Name/ID
      2. Selected Stocks (tickers)
      3. P/L Status (Realized/Unrealized)
      4. Days Remaining (e.g., 3/5 days active)
      5. Status (Active, Closed, Expired)

- **CTA Button:**  
  - "View All Strategies" (Redirects to Monitoring Panel).

---

##### **(C) Performance Summary**
- **Title:** "Performance Metrics"
- **Content:**
  - **Graphs:**  
    - P/L Trends (Line Chart).
    - Strategy Success Rates (Pie Chart).  
  - **Key Metrics:**  
    - Total Trades: [Count]  
    - Success Rate: [%]  
    - Best Performing Strategy: [Name or ID].

- **CTA Button:**  
  - "View Reports" (Redirects to Reports Page).

---

#### **2.2.4 Footer**
- **Content:**  
  - Copyright © [Year].  
  - Version: [App Version].  
  - Links to Terms of Service, Privacy Policy, and Contact Support.

---

### **3. Visual Representation**

#### **Wireframe Layout**  

```
+---------------------------------------------------------------+
| Header: Logo              Dashboard                User Info  |
+---------------------------------------------------------------+
| Sidebar:                | Main Content:                         |
| - Dashboard             |                                       |
| - Setup Strategy        | Top Gainers:                         |
| - Monitor Strategies    | ------------------------------------- |
| - Reports               | Ticker | Name | % Gain | Price | ... |
|                         | ------------------------------------- |
|                         | [Setup Strategy]                     |
|-------------------------|---------------------------------------|
|                         | Active Strategies:                   |
|                         | ------------------------------------- |
|                         | Total Active: [Count]   P/L: [Value] |
|                         | ------------------------------------- |
|                         | Strategy | Stocks | Status | Days    |
|                         | ------------------------------------- |
|                         | [View All Strategies]                |
|-------------------------|---------------------------------------|
|                         | Performance Summary:                 |
|                         | ------------------------------------- |
|                         | [Graphs]       [Metrics]             |
|                         | [View Reports]                       |
+---------------------------------------------------------------+
| Footer: Copyright | Terms of Use | Privacy Policy | Contact   |
+---------------------------------------------------------------+
```

---

### **4. Style Recommendations**
1. **Color Scheme:**  
   - Light or dark mode options for accessibility.  
   - Use accent colors to highlight key metrics (e.g., green for profit, red for loss).
2. **Typography:**  
   - Clean, sans-serif fonts for readability.  
3. **Interactive Elements:**  
   - Hover effects on buttons and rows for clarity.  
   - Tooltips for detailed explanations of metrics.  
