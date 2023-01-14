import PropTypes from 'prop-types';
import {
  Article,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import getRandomHexColor from 'utils/getColor';

export default function Statistics({ title, stats }) {
  return (
    <Article>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <Item
            key={stat.id}
            style={{ backgroundColor: [getRandomHexColor()] }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Article>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
