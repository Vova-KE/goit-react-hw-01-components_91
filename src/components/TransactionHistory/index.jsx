import PropTypes from 'prop-types';
import style from './style.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.transactionTableHeadCell}>Type</th>
          <th className={style.transactionTableHeadCell}>Amount</th>
          <th className={style.transactionTableHeadCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={style.transactionTableRow}>
            <td className={style.transactionTableCell}>{item.type}</td>
            <td className={style.transactionTableCell}>{item.amount}</td>
            <td className={style.transactionTableCell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
