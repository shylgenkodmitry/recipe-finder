import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import Img from 'components/Img';
import A from 'components/A';

export class RecipeTableBodyItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item, index } = this.props;

    return (
      <Table.Row>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>
          <Img src={item.thumbnail} alt={item.title} />
        </Table.Cell>
        <Table.Cell>
          <A href={item.href}>{item.title}</A>
        </Table.Cell>
        <Table.Cell>{item.ingredients}</Table.Cell>
      </Table.Row>
    );
  }
}

RecipeTableBodyItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default RecipeTableBodyItem;
