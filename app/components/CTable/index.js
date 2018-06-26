import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import Wrapper from './Wrapper';

function CTable(props) {
  const {
    headItemComponent: HeadItem,
    bodyItemComponent: BodyItem,
    singleComponent: SingleItem,
    bodyItems,
  } = props;

  if (!bodyItems) {
    return (
      <Wrapper><SingleItem /></Wrapper>
    );
  }

  const headerContent = (<Table.Header><HeadItem /></Table.Header>);
  const innerContent = bodyItems.map((item, index) => (
    <BodyItem key={`item-${item.title}-${new Date().getTime()}`} item={item} index={index} />  // eslint-disable-line no-underscore-dangle
  ));
  const bodyContent = (<Table.Body>{innerContent}</Table.Body>);

  return (
    <Wrapper>
      <Table celled>
        {headerContent}
        {bodyContent}
      </Table>
    </Wrapper>
  );
}

CTable.propTypes = {
  bodyItems: PropTypes.array,
  headItemComponent: PropTypes.func,
  bodyItemComponent: PropTypes.func,
  singleComponent: PropTypes.func,
};

export default CTable;
