import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th className={css.theadChild}>Type</th>
          <th className={css.theadChild}>Amount</th>
          <th className={css.theadChild}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.tbody}>
            <td className={css.tbodyItem}>{item.type}</td>
            <td className={css.tbodyItem}>{item.amount}</td>
            <td className={css.tbodyItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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
