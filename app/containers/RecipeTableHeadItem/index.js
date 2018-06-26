import React from 'react';
import { Table } from 'semantic-ui-react';

export class RecipeTableHeadItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table.Row>
        <Table.HeaderCell>No.</Table.HeaderCell>
        <Table.HeaderCell>Thumbnail</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Ingredients</Table.HeaderCell>
      </Table.Row>
    );
  }
}

export default RecipeTableHeadItem;
