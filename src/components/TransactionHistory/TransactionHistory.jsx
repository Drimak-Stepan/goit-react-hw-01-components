import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  TheadChild,
  BodyTr,
  BodyItem,
} from './TransactionHistory.styled';
export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <tr>
          <TheadChild>Type</TheadChild>
          <TheadChild>Amount</TheadChild>
          <TheadChild>Currency</TheadChild>
        </tr>
      </Thead>

      <tbody>
        {items.map(item => (
          <BodyTr key={item.id}>
            <BodyItem>{item.type}</BodyItem>
            <BodyItem>{item.amount}</BodyItem>
            <BodyItem>{item.currency}</BodyItem>
          </BodyTr>
        ))}
      </tbody>
    </Table>
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
