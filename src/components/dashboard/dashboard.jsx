import { useState } from 'react';
import logo from '../../assets/logo.png';
import instagram from '../..//assets/instagram.png';
import twitter from '../..//assets/twitter.png';
import facebook from '../..//assets/facebook.png';
import linkedin from '../..//assets/linkedin.png';
import youtube from '../..//assets/youtube.png';
import tiktok from '../..//assets/tiktok.png';
import './dashboard.css';
import PropTypes from 'prop-types';

// Define category colors and list
const categoryColors = {
  "Food": "#ff6384",
  "Bills": "#36a2eb",
  "Entertainment": "#ffcd56",
  "Transport": "#4bc0c0",
  "Misc": "#9966ff"
};
const categories = ["Food", "Bills", "Entertainment", "Transport", "Misc"];

// Instead of random, assign categories in round-robin order
const generateDummyTransactions = (service, count) => {
  const transactions = [];
  for (let i = 1; i <= count; i++) {
    const day = (i % 28) + 1;
    const dayStr = day < 10 ? `0${day}` : day;
    transactions.push({
      id: i,
      description: `${service} Transaction ${i}`,
      date: `2025-01-${dayStr}`,
      amount: (i % 2 === 0 ? "+" : "-") + `$${(Math.floor(Math.random() * 100) + 1)}`,
      category: categories[i % categories.length]
    });
  }
  return transactions;
};

const generateDetailedTransactions = (service, count) => {
  const transactions = [];
  for (let i = 1; i <= count; i++) {
    const day = (i % 28) + 1;
    const dayStr = day < 10 ? `0${day}` : day;
    const hour = Math.floor(Math.random() * 12) + 1;
    const minute = Math.floor(Math.random() * 60);
    const minuteStr = minute < 10 ? `0${minute}` : minute;
    const period = Math.random() > 0.5 ? "AM" : "PM";
    transactions.push({
      id: i,
      description: `${service} Detailed Transaction ${i}`,
      date: `2025-02-${dayStr}`,
      time: `${hour}:${minuteStr} ${period}`,
      recipient: `${service} Recipient ${i}`,
      amount: (i % 2 === 0 ? "+" : "-") + `$${(Math.floor(Math.random() * 500) + 50)}`,
      fee: `$${Math.floor(Math.random() * 10)}`,
      category: categories[i % categories.length]
    });
  }
  return transactions;
};

// Generate 15 dummy transactions for mobile services
const mobileTransactions = {
  "Bank Transactions": generateDummyTransactions("Bank Transactions", 15),
  "Orange Money": generateDummyTransactions("Orange Money", 15),
  "Wave": generateDummyTransactions("Wave", 15)
};

// Generate 15 detailed transactions for multi-option views
const multiOptionTransactions = {
  "Transfers": generateDetailedTransactions("Transfers", 15),
  "Brokerage": generateDetailedTransactions("Brokerage", 15),
  "Payments": generateDetailedTransactions("Payments", 15),
  "Loans": generateDetailedTransactions("Loans", 15),
  "Investments": generateDetailedTransactions("Investments", 15)
};

// Adjusted total balances (dummy values)
const totalBalances = {
  "Bank Transactions": "$80",
  "Orange Money": "$300",
  "Wave": "$750",
  "Brokerage": "$2500",
  "Loans": "$90",
  "Investments": "$4500"
};

// List of accounts for "Accounts at a Glance"
const accountList = Object.keys(totalBalances);

// MultiNodal options (including "Settings")
const multiOptions = ["Transfers", "Brokerage", "Payments", "Loans", "Investments", "Settings"];

// Dummy utility bills data
const dummyBills = [
  { id: 1, company: "Utility Company A", bill: "$75", due: "2025-02-15" },
  { id: 2, company: "Telecom Company B", bill: "$50", due: "2025-02-20" }
];

// Helper: convert balance string to number
const parseBalance = (balanceStr) => parseFloat(balanceStr.replace(/[$,]/g, ""));

// --- Aggregate Transactions for Pie Charts ---
const aggregateTransactions = () => {
  const debitTotals = { Food: 0, Bills: 0, Entertainment: 0, Transport: 0, Misc: 0 };
  const creditTotals = { Food: 0, Bills: 0, Entertainment: 0, Transport: 0, Misc: 0 };
  accountList.forEach(account => {
    const txs = mobileTransactions[account] || [];
    txs.forEach(tx => {
      const amt = parseFloat(tx.amount.replace(/[^0-9.]/g, ""));
      const cat = tx.category;
      if (tx.amount.startsWith("-")) {
        debitTotals[cat] += amt;
      } else {
        creditTotals[cat] += amt;
      }
    });
  });
  return { debitTotals, creditTotals };
};
const { debitTotals, creditTotals } = aggregateTransactions();
const totalDebits = Object.values(debitTotals).reduce((sum, v) => sum + v, 0);
const totalCredits = Object.values(creditTotals).reduce((sum, v) => sum + v, 0);

// PieChart Component
const PieChart = ({ data }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const total = Object.values(data).reduce((sum, val) => sum + val, 0);
  let offset = 0;
  const slices = Object.entries(data).map(([category, value]) => {
    const proportion = value / total;
    const dash = proportion * circumference;
    const slice = (
      <circle
        key={category}
        r={radius}
        cx="16"
        cy="16"
        fill="transparent"
        stroke={categoryColors[category] || "#000"}
        strokeWidth="32"
        strokeDasharray={`${dash} ${circumference - dash}`}
        transform={`rotate(${(offset / circumference) * 360 - 90} 16 16)`}
      />
    );
    offset += dash;
    return slice;
  });
  return (
    <svg viewBox="0 0 32 32" className="pie-chart">
      {slices}
    </svg>
  );
};

PieChart.propTypes = {
  data: PropTypes.object.isRequired,
};

// Legend Component
const Legend = ({ data }) => {
  return (
    <ul className="pie-legend">
      {Object.entries(data).map(([category, value]) => (
        <li key={category}>
          <span className="legend-color" style={{ background: categoryColors[category] || "#000" }}></span>
          {category}: ${value.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

Legend.propTypes = {
  data: PropTypes.object.isRequired,
};

// Helper to get the most recent transaction for an account
const getRecentTransaction = (account) => {
  const txs = mobileTransactions[account] || [];
  return txs.length ? txs[txs.length - 1] : null;
};

// Calculate grand total
const grandTotal = accountList.reduce((acc, account) => acc + parseBalance(totalBalances[account]), 0);

const Dashboard = () => {
  // Flash view states
  const [flashTab, setFlashTab] = useState("Accounts"); // "Accounts" or "BillPay"
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedMultiOption, setSelectedMultiOption] = useState(null);
  const [emojiThresholds, setEmojiThresholds] = useState({ sad: 100, normal: 500 });

  const handleAccountClick = (account) => setSelectedAccount(account);
  const handleBackFromAccount = () => setSelectedAccount(null);
  const handleFlashTabClick = (tab) => {
    setFlashTab(tab);
    if (tab === "Accounts") {
      setSelectedAccount(null);
      setSelectedMultiOption(null);
    }
  };
  const handleMultiOptionClick = (option) => {
    setSelectedMultiOption(option);
    setSelectedAccount(null);
    setFlashTab("Accounts");
  };
  const handleLogout = () => (window.location.href = "/");
  const handleSettingsSave = (e) => {
    e.preventDefault();
    const sadVal = parseFloat(e.target.elements.thresholdSad.value);
    const normalVal = parseFloat(e.target.elements.thresholdNormal.value);
    setEmojiThresholds({ sad: sadVal, normal: normalVal });
  };
  const getEmojiForBalance = (balanceStr) => {
    const balance = parseBalance(balanceStr);
    if (balance < emojiThresholds.sad) return "😢";
    else if (balance < emojiThresholds.normal) return "🙂";
    else return "😁";
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header">
        <ul>
          <li>Consumer Microfinance</li>
          <li>Commercial Microfinance</li>
          <li>Group Lending</li>
          <li>Community Development</li>
        </ul>
      </div>

      {/* SubHeader with logo */}
      <div className="subHeader">
        <img src={logo} className="logo" alt="Company logo" />
        <div className="subHeaderContent">
          <div>I would like to...</div>
          <div className="save">Save</div>
          <div className="invest">Invest</div>
          <div className="borrow">Borrow</div>
          <div className="learn">Learn</div>
        </div>
      </div>

      {/* Main Body */}
      <div className="body">
        {/* Left Panel: Accounts List + Grand Total */}
        <div className="dashboard-left">
          <h3>Financial Transactions</h3>
          <ul>
            {accountList.map((account) => (
              <li key={account}>
                <button className="dashboard-service-button" onClick={() => handleAccountClick(account)}>
                  {account} <span className="balance-tag">{totalBalances[account]}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="grand-total">
            Grand Total: ${grandTotal.toLocaleString()}
          </div>
        </div>

        {/* Flash Div */}
        <div className="flash">
          {selectedMultiOption ? (
            <div className="multi-option-content">
              <button className="dashboard-back-button" onClick={() => setSelectedMultiOption(null)}>
                Back
              </button>
              {selectedMultiOption === "Settings" ? (
                <>
                  <h4>Settings</h4>
                  <form onSubmit={handleSettingsSave} className="settings-form">
                    <label>
                      Threshold for Sad (under):
                      <input type="number" name="thresholdSad" defaultValue={emojiThresholds.sad} />
                    </label>
                    <label>
                      Threshold for Normal (under):
                      <input type="number" name="thresholdNormal" defaultValue={emojiThresholds.normal} />
                    </label>
                    <button type="submit" className="dashboard-action-button">
                      Save
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h4>{selectedMultiOption} Details</h4>
                  {totalBalances[selectedMultiOption] && (
                    <div className="balance">
                      Total Balance: {totalBalances[selectedMultiOption]}
                    </div>
                  )}
                  <ul className="detailed-transaction-list">
                    {multiOptionTransactions[selectedMultiOption].map((tx) => (
                      <li key={tx.id} className="detailed-transaction-item">
                        <span className="tx-date">{tx.date}</span>
                        <span className="tx-time">{tx.time}</span>
                        <span className="tx-desc">{tx.description}</span>
                        <span className="tx-recipient">{tx.recipient}</span>
                        <span className="tx-amount">{tx.amount}</span>
                        <span className="tx-fee">{tx.fee}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ) : selectedAccount ? (
            <div className="account-detail">
              <button className="dashboard-back-button" onClick={handleBackFromAccount}>
                Back
              </button>
              <h4>{selectedAccount} Transactions</h4>
              {totalBalances[selectedAccount] && (
                <div className="balance">
                  Total Balance: {totalBalances[selectedAccount]}
                </div>
              )}
              <ul className="transaction-list">
                {(mobileTransactions[selectedAccount] ||
                  multiOptionTransactions[selectedAccount] ||
                  []).map((tx) => (
                  <li key={tx.id} className="transaction-item">
                    <span className="tx-date">{tx.date}</span>
                    <span className="tx-desc">
                      {tx.description} ({tx.category})
                    </span>
                    <span className="tx-amount">{tx.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : flashTab === "BillPay" ? (
            <div className="billpay-view">
              <h4>Utility Bills</h4>
              <ul className="bill-list">
                {dummyBills.map((bill) => (
                  <li key={bill.id} className="bill-item">
                    <span className="bill-company">{bill.company}</span>
                    <span className="bill-amount">{bill.bill}</span>
                    <span className="bill-due">Due: {bill.due}</span>
                    <button className="dashboard-pay-now-button">Pay Now</button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <div className="flash-navbar">
                <button
                  className={`dashboard-flash-tab ${flashTab === "Accounts" ? "active" : ""}`}
                  onClick={() => handleFlashTabClick("Accounts")}
                >
                  Accounts
                </button>
                <button
                  className={`dashboard-flash-tab ${flashTab === "BillPay" ? "active" : ""}`}
                  onClick={() => handleFlashTabClick("BillPay")}
                >
                  BillPay
                </button>
              </div>
              <div className="accounts-glance">
                <h4 className="ag-header">Accounts at a Glance</h4>
                <ul className="accounts-list">
                  {accountList.map((account) => {
                    const recentTx = getRecentTransaction(account);
                    return (
                      <li key={account}>
                        <button
                          className="dashboard-service-button ag-button"
                          onClick={() => handleAccountClick(account)}
                        >
                          {account}{" "}
                          <span className="emoji">{getEmojiForBalance(totalBalances[account])}</span>
                        </button>
                        {recentTx && (
                          <div className="recent-transaction">
                            <strong>Most Recent:</strong>{" "}
                            <span className="recent-desc">{recentTx.description}</span> –{" "}
                            <span className="recent-amount">{recentTx.amount}</span>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="pie-charts">
                  <div className="pie-chart-container">
                    <h5>Debits by Category</h5>
                    <PieChart data={debitTotals} />
                    <Legend data={debitTotals} />
                    <div className="pie-totals">
                      <strong>Total Debits:</strong> ${totalDebits.toFixed(2)}
                    </div>
                  </div>
                  <div className="pie-chart-container">
                    <h5>Credits by Category</h5>
                    <PieChart data={creditTotals} />
                    <Legend data={creditTotals} />
                    <div className="pie-totals">
                      <strong>Total Credits:</strong> ${totalCredits.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* MultiNodal Navigation */}
        <div className="login-container1">
          <div className="multiNodal1">
            <div className="stacked-buttons1">
              {multiOptions.map((option) => (
                <button key={option} className="dashboard-nav-button1" onClick={() => handleMultiOptionClick(option)}>
                  {option} {totalBalances[option] && <span className="balance-tag">({totalBalances[option]})</span>}
                </button>
              ))}
            </div>
            <div className="action-buttons1">
              <button className="dashboard-action-button1" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Social Media Images */}
      <footer className="footer">
        <div className="followUs">
          Follow Us:
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
        </div>
        <div className="footerContent">Footer Content</div>
        <div className="languageOptions">
          <select>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
