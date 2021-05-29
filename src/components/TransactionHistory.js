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
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
};

export default TransactionHistory;