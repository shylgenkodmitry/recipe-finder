import React from 'react';
import PropTypes from 'prop-types';

import H4 from 'components/H4';
import CTable from 'components/CTable';
import LoadingIndicator from 'components/LoadingIndicator';
import RecipeTableHeadItem from 'containers/RecipeTableHeadItem';
import RecipeTableBodyItem from 'containers/RecipeTableBodyItem';

function RecipesTable({ loading, error, recipes }) {
  if (loading) {
    return <CTable singleComponent={LoadingIndicator} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <H4>Something went wrong, please try again!</H4>
    );
    return <CTable singleComponent={ErrorComponent} />;
  }

  if (recipes) {
    return (
      <CTable
        bodyItems={recipes}
        headItemComponent={RecipeTableHeadItem}
        bodyItemComponent={RecipeTableBodyItem}
      />
    );
  }

  return null;
}

RecipesTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  recipes: PropTypes.any,
};

export default RecipesTable;
