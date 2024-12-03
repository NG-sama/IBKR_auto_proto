### **Strategy Configuration Panel**

#### **1. Overview**  
The **Strategy Configuration Panel** is where users define their trading strategy parameters based on selected stocks. It allows input of stop-loss, profit target, and time horizon, with validations to ensure correct and actionable entries.

---

### **2. Layout Structure**

#### **2.1 Sections**  
1. **Header (Title and Summary)**  
2. **Stock Selection Display**  
3. **Strategy Parameters**  
4. **Confirmation and Actions**

---

### **2.2 Detailed Layout**

---

#### **Header (Title and Summary)**  
- **Title:** "Setup Your Trading Strategy"  
- **Subtext:**  
  - "Select stocks and define your strategy parameters below. Ensure you review all inputs before proceeding."  

---

#### **Stock Selection Display**  
- **Section Title:** "Selected Stocks"  
- **Content:**  
  - A scrollable table or card layout listing selected stocks:  
    - Columns:  
      1. **Ticker** (e.g., AAPL).  
      2. **Company Name** (e.g., Apple Inc.).  
      3. **Last Close Price** (e.g., $178.35).  
      4. **% Gain Previous Day** (e.g., 6.4%).  

- **Actions:**  
  - Option to deselect stocks from the list (checkbox or remove button).  

---

#### **Strategy Parameters**  
- **Section Title:** "Define Your Strategy Parameters"  

- **Form Fields:**  
  1. **Stop-Loss (%):**  
     - Input type: Number (slider or text input).  
     - Placeholder: "Enter % (e.g., 20)"  
     - Validation: Must be a positive percentage value less than 100.  
  2. **Profit Target (%):**  
     - Input type: Number (slider or text input).  
     - Placeholder: "Enter % (e.g., 10)"  
     - Validation: Must be a positive percentage value less than 100.  
  3. **Time Horizon (Days):**  
     - Input type: Dropdown or number input.  
     - Options: 1 to 30 days.  
     - Placeholder: "Select time horizon (days)".  

---

#### **Confirmation and Actions**  
- **Summary Panel:**  
  - Auto-generated summary of the configured strategy:  
    - Selected Stocks: [Count]  
    - Stop-Loss: [Value] %  
    - Profit Target: [Value] %  
    - Time Horizon: [Value] days  

- **Action Buttons:**  
  1. **Save Strategy:**  
     - Saves the configured strategy to the database.  
  2. **Reset Form:**  
     - Clears all fields and resets selections.  
  3. **Cancel:**  
     - Returns to the previous screen without saving changes.  

---

### **3. Visual Representation**

#### **Wireframe Layout**  

```
+-------------------------------------------------------------+
| Header: "Setup Your Trading Strategy"                      |
| Subtext: "Select stocks and define your strategy below."    |
+-------------------------------------------------------------+
| Selected Stocks:                                            |
| ----------------------------------------------------------  |
| | Ticker | Name      | Last Close | % Gain | [Remove] |     |
| | AAPL   | Apple Inc | $178.35    | 6.4%   |    ❌     |     |
| | MSFT   | Microsoft | $311.50    | 5.8%   |    ❌     |     |
| ----------------------------------------------------------  |
| [Add/Remove Stocks Button]                                  |
+-------------------------------------------------------------+
| Define Parameters:                                          |
| ----------------------------------------------------------  |
| Stop-Loss (%): [_____%]                                     |
| Profit Target (%): [_____%]                                 |
| Time Horizon (Days): [Dropdown/___ Days]                    |
+-------------------------------------------------------------+
| Summary:                                                   |
| ----------------------------------------------------------  |
| Selected Stocks: [2]                                       |
| Stop-Loss: [20%]                                           |
| Profit Target: [10%]                                       |
| Time Horizon: [5 days]                                     |
| ----------------------------------------------------------  |
+-------------------------------------------------------------+
| Actions: [Save Strategy] [Reset Form] [Cancel]             |
+-------------------------------------------------------------+
```

---

### **4. Style Recommendations**

1. **Color Scheme:**  
   - Use a neutral background for the form area.  
   - Highlight the **Save Strategy** button with a primary accent color (e.g., green).  
2. **Interactive Elements:**  
   - Add tooltips for each field to explain its purpose (e.g., "Stop-loss: Maximum loss you are willing to take").  
   - Include validation messages in red for invalid inputs.  
3. **Responsive Design:**  
   - Ensure it adjusts seamlessly for tablet and mobile users.
