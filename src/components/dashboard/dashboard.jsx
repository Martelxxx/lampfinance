import { useState } from 'react';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import tiktok from '../../assets/tiktok.png';
import './dashboard.css';
import PropTypes from 'prop-types';

// Define category colors and list
const categoryColors = {
  Food: "#ff6384",
  Bills: "#36a2eb",
  Entertainment: "#ffcd56",
  Transport: "#4bc0c0",
  Misc: "#9966ff"
};
const categories = ["Food", "Bills", "Entertainment", "Transport", "Misc"];

// Generate dummy transactions (for non-stock data)
const generateDummyTransactions = (service, count) => {
  const transactions = [];
  for (let i = 1; i <= count; i++) {
    const day = (i % 28) + 1;
    const dayStr = day < 10 ? `0${day}` : day;
    transactions.push({
      id: i,
      description: `${service} Transaction ${i}`,
      date: `2025-01-${dayStr}`,
      amount: (i % 2 === 0 ? "+" : "-") + `$${Math.floor(Math.random() * 100) + 1}`,
      category: categories[i % categories.length]
    });
  }
  return transactions;
};

// Generate detailed transactions (for multi-option forms)
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
      amount: (i % 2 === 0 ? "+" : "-") + `$${Math.floor(Math.random() * 500) + 50}`,
      fee: `$${Math.floor(Math.random() * 10)}`,
      category: categories[i % categories.length]
    });
  }
  return transactions;
};

// --------------------------------------------------------------------
// Updated Data Structures
// --------------------------------------------------------------------

// Include a key for Transfers history
const mobileTransactions = {
  Checking: generateDummyTransactions("Checking", 15),
  Savings: generateDummyTransactions("Savings", 15),
  "Orange Money": generateDummyTransactions("Orange Money", 15),
  Wave: generateDummyTransactions("Wave", 15),
  Transfers: generateDummyTransactions("Transfers", 10)
};

// The left panel will list all these accounts (and thus show Transfers history)
const accountList = Object.keys(mobileTransactions);

// Multi-option actions now include a Transfers form (for transferring funds between accounts),
// Brokerage, Loans, Search, and Settings.
const multiOptions = ["Transfers", "Brokerage", "Loans", "Search", "Settings"];

// Dummy data for multi-option transactions
const multiOptionTransactions = {
  Brokerage: generateDetailedTransactions("Brokerage", 15),
  Loans: generateDetailedTransactions("Loans", 15)
};

// Updated total balances (for demonstration; note Transfers history doesn’t hold a balance)
const totalBalances = {
  Checking: "$80",
  Savings: "$150",
  "Orange Money": "$300",
  Wave: "$750",
  Transfers: "$0",
  Brokerage: "$2500",
  Loans: "$90",
  Investments: "$4500"
};

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
          <span
            className="legend-color"
            style={{ background: categoryColors[category] || "#000" }}
          ></span>
          {category}: ${value.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

Legend.propTypes = {
  data: PropTypes.object.isRequired,
};

// Helper: convert balance string to number
const parseBalance = (balanceStr) => parseFloat(balanceStr.replace(/[$,]/g, ""));

// Compute aggregate debits and credits from all mobileTransactions
const aggregateTransactions = () => {
  const debitTotals = { Food: 0, Bills: 0, Entertainment: 0, Transport: 0, Misc: 0 };
  const creditTotals = { Food: 0, Bills: 0, Entertainment: 0, Transport: 0, Misc: 0 };
  Object.keys(mobileTransactions).forEach((account) => {
    const txs = mobileTransactions[account] || [];
    txs.forEach((tx) => {
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

// Helper: Compute average debit and credit from all mobileTransactions
const computeAverages = () => {
  let totalDebit = 0, debitCount = 0, totalCredit = 0, creditCount = 0;
  Object.keys(mobileTransactions).forEach((account) => {
    mobileTransactions[account].forEach((tx) => {
      const amt = parseFloat(tx.amount.replace(/[^0-9.]/g, ""));
      if (tx.amount.startsWith("-")) {
        totalDebit += amt;
        debitCount++;
      } else {
        totalCredit += amt;
        creditCount++;
      }
    });
  });
  const avgDebit = debitCount > 0 ? totalDebit / debitCount : 0;
  const avgCredit = creditCount > 0 ? totalCredit / creditCount : 0;
  return { avgDebit, avgCredit };
};
const { avgDebit, avgCredit } = computeAverages();

// Calculate available cash from Orange Money, Wave, and Brokerage
const availableCash =
  parseBalance(totalBalances["Orange Money"]) +
  parseBalance(totalBalances["Wave"]) +
  parseBalance(totalBalances["Brokerage"]);

// Complex loan eligibility formula using ratios and available cash
const loanEligibility = availableCash * (avgDebit > 0 ? (avgCredit / avgDebit) : 1);

// Calculate grand total based on personal accounts only
const grandTotal = accountList.reduce(
  (acc, account) => acc + parseBalance(totalBalances[account]),
  0
);

// Helper: Get the most recent transaction for an account
const getRecentTransaction = (account) => {
  const txs = mobileTransactions[account] || [];
  return txs.length ? txs[txs.length - 1] : null;
};

// Define gridAccounts for the Accounts at a Glance grid (include Loans)
const gridAccounts = ["Checking", "Savings", "Orange Money", "Wave", "Transfers", "Loans"];

const Dashboard = () => {
  // State for flash view
  const [flashTab, setFlashTab] = useState("Accounts"); // "Accounts" or "BillPay"
  const [selectedAccount, setSelectedAccount] = useState(null); // For history view from left panel
  const [selectedMultiOption, setSelectedMultiOption] = useState(null); // For multi-nodal form view
  const [emojiThresholds, setEmojiThresholds] = useState({ sad: 100, normal: 500 });

  // State for search functionality (used only in the Search multi-option)
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handler for left panel account click (history view)
  const handleAccountClick = (account) => {
    setSelectedMultiOption(null);
    setSelectedAccount(account);
  };
  const handleBackFromAccount = () => {
    setSelectedAccount(null);
  };

  // Handler for multi-option navigation (forms)
  const handleMultiOptionClick = (option) => {
    setSelectedMultiOption(option);
    setSelectedAccount(null);
    // Clear any previous search results if switching tabs
    setSearchQuery("");
    setSearchResults([]);
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

  // Multi-option: Transfers form handler
  const handleMultiTransferSubmit = (e) => {
    e.preventDefault();
    const source = e.target.elements.sourceAccount.value;
    const destination = e.target.elements.destinationAccount.value;
    const amount = parseFloat(e.target.elements.transferAmount.value);
    if (source === destination) {
      alert("Source and destination must be different.");
      return;
    }
    alert(`Transferring $${amount.toFixed(2)} from ${source} to ${destination}.`);
    setSelectedMultiOption(null);
  };

  // Brokerage form handler
  const handleBrokerageSubmit = (e) => {
    e.preventDefault();
    const stockSymbol = e.target.elements.stockSymbol.value;
    const quantity = parseInt(e.target.elements.quantity.value, 10);
    const action = e.target.elements.action.value;
    alert(`Brokerage: ${action} ${quantity} shares of ${stockSymbol}.`);
    setSelectedMultiOption(null);
  };

  // Loans form handler using our complex loanEligibility
  const handleLoanSubmit = (e) => {
    e.preventDefault();
    const requestedAmount = parseFloat(e.target.elements.requestedAmount.value);
    if (requestedAmount > loanEligibility) {
      alert(`Requested amount exceeds your eligible limit of $${loanEligibility.toFixed(2)}.`);
    } else {
      alert(`Loan request submitted for $${requestedAmount.toFixed(2)}.`);
    }
    setSelectedMultiOption(null);
  };

  // Search handlers (used only when multi-option === "Search")
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const results = [];
    Object.keys(mobileTransactions).forEach((account) => {
      mobileTransactions[account].forEach((tx) => {
        const query = searchQuery.toLowerCase();
        if (
          tx.description.toLowerCase().includes(query) ||
          tx.date.toLowerCase().includes(query) ||
          tx.amount.toLowerCase().includes(query)
        ) {
          results.push({ ...tx, account });
        }
      });
    });
    setSearchResults(results);
  };
  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
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
        {/* Left Panel: Account History */}
        <div className="dashboard-left">
          <h3>Financial Transactions</h3>
          <ul>
            {accountList.map((account) => (
              <li key={account}>
                <button
                  className="dashboard-service-button"
                  onClick={() => handleAccountClick(account)}
                >
                  {account}
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
            <>
              <button
                className="dashboard-back-button"
                onClick={() => setSelectedMultiOption(null)}
              >
                Back
              </button>
              {selectedMultiOption === "Transfers" ? (
                <div className="transfer-form">
                  <h4>Transfer Funds</h4>
                  <form onSubmit={handleMultiTransferSubmit}>
                    <label>
                      Source Account:
                      <select name="sourceAccount" required>
                        <option value="Checking">Checking</option>
                        <option value="Savings">Savings</option>
                      </select>
                    </label>
                    <label>
                      Destination Account:
                      <select name="destinationAccount" required>
                        <option value="Savings">Savings</option>
                        <option value="Checking">Checking</option>
                      </select>
                    </label>
                    <label>
                      Amount:
                      <input type="number" name="transferAmount" required />
                    </label>
                    <button type="submit" className="dashboard-action-button">
                      Submit Transfer
                    </button>
                  </form>
                </div>
              ) : selectedMultiOption === "Brokerage" ? (
                <div className="brokerage-form">
                  <h4>Brokerage – Buy/Sell Stocks</h4>
                  <form onSubmit={handleBrokerageSubmit}>
                    <label>
                      Stock Symbol:
                      <input type="text" name="stockSymbol" required />
                    </label>
                    <label>
                      Quantity:
                      <input type="number" name="quantity" required />
                    </label>
                    <div>
                      <label>
                        <input type="radio" name="action" value="buy" defaultChecked />
                        Buy
                      </label>
                      <label>
                        <input type="radio" name="action" value="sell" />
                        Sell
                      </label>
                    </div>
                    <button type="submit" className="dashboard-action-button">
                      Submit
                    </button>
                  </form>
                </div>
              ) : selectedMultiOption === "Loans" ? (
                <div className="loans-form">
                  <h4>Loan Request</h4>
                  <p>Eligible Amount: ${loanEligibility.toFixed(2)}</p>
                  <form onSubmit={handleLoanSubmit}>
                    <label>
                      Requested Amount:
                      <input
                        type="number"
                        name="requestedAmount"
                        max={loanEligibility}
                        required
                      />
                    </label>
                    <button type="submit" className="dashboard-action-button">
                      Submit Loan Request
                    </button>
                  </form>
                </div>
              ) : selectedMultiOption === "Search" ? (
                <div className="search-form">
                  <h4>Search Transactions</h4>
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      name="searchQuery"
                      placeholder="Search by name, date or amount"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" className="dashboard-action-button">
                      Search
                    </button>
                    {searchResults.length > 0 && (
                      <button
                        type="button"
                        onClick={handleClearSearch}
                        className="dashboard-action-button"
                      >
                        Clear Search
                      </button>
                    )}
                  </form>
                  {searchResults.length > 0 && (
                    <div className="search-results">
                      <h4>Search Results</h4>
                      <ul className="transaction-list">
                        {searchResults.map((result, index) => (
                          <li key={index} className="transaction-item">
                            <span className="tx-date">{result.date}</span>
                            <span className="tx-desc">
                              {result.description} ({result.account})
                            </span>
                            <span className="tx-amount">{result.amount}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedMultiOption === "Settings" ? (
                <div className="settings-form-container">
                  <h4>Settings</h4>
                  <form onSubmit={handleSettingsSave}>
                    <label>
                      Threshold for Sad (under):
                      <input
                        type="number"
                        name="thresholdSad"
                        defaultValue={emojiThresholds.sad}
                      />
                    </label>
                    <label>
                      Threshold for Normal (under):
                      <input
                        type="number"
                        name="thresholdNormal"
                        defaultValue={emojiThresholds.normal}
                      />
                    </label>
                    <button type="submit" className="dashboard-action-button">
                      Save
                    </button>
                  </form>
                </div>
              ) : null}
            </>
          ) : selectedAccount ? (
            // Account History View (from left panel)
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
                {(mobileTransactions[selectedAccount] || []).map((tx) => (
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
                {/* Dummy bills data */}
              </ul>
            </div>
          ) : (
            // Default Accounts at a Glance View (grid of widgets)
            <div className="accounts-glance">
              <h4 className="ag-header">Accounts at a Glance</h4>
              <div className="accounts-grid">
                {gridAccounts.map((account) => {
                  const recentTx = getRecentTransaction(account);
                  return (
                    <div key={account} className="account-widget">
                      <button
                        className="dashboard-service-button ag-button"
                        onClick={() => handleAccountClick(account)}
                      >
                        {account}
                      </button>
                      {account === "Loans" ? (
                        <div className="account-eligible">
                          Eligible: ${loanEligibility.toFixed(2)}
                          <br />
                          Monthly Payment: ${(loanEligibility / 24).toFixed(2)}
                        </div>
                      ) : (
                        <div className="account-emoji">
                          {getEmojiForBalance(totalBalances[account])}
                        </div>
                      )}
                      {recentTx && (
                        <div className="recent-transaction">
                          <strong>Most Recent:</strong>
                          <div className="recent-desc">
                            {recentTx.description} – {recentTx.amount}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
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
          )}
        </div>

        {/* MultiNodal Navigation (Right Panel) */}
        <div className="login-container1">
          <h3>Dashboard</h3>
            <div className="stacked-buttons">
              {multiOptions.map((option) => (
                <button
                  key={option}
                  className="dashboard-nav-button"
                  onClick={() => handleMultiOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="action-buttons">
              <button className="dashboard-action-button" onClick={handleLogout}>
                Logout
              </button>
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
