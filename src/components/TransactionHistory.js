import React from "react"
import PropTypes from "prop-types";

const TransactionHistory = ({ transactions }) => (
  <table className="transaction-history">
    <thead>
            {transactions.map(({ id, type, amount, currency}) => (
        <tr key={id}>
          <th>TYPE {type}</th>
          <th>AMOUNT {amount}</th>
          <th>CURRENCY {currency}</th>
        </tr>
      ))}
    </thead>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;