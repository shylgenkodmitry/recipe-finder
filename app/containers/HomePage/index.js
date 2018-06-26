/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRecipes, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import Form from './Form';
import Input from './Input';
import RecipesTable from 'components/RecipesTable';
import Section from './Section';
import { loadRecipes } from '../App/actions';
import { changeQuery } from './actions';
import { makeSelectQuery } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onSubmitForm();
  }

  render() {
    const { loading, error, recipes, onSubmitForm, query, onChangeQuery } = this.props;
    const recipesTableProps = {
      loading,
      error,
      recipes,
    };

    return (
      <article>
        <Helmet>
          <title>Recipes found</title>
          <meta name="description" content="Recipe Finder" />
        </Helmet>
        <div>
          <Section>
            <Form onSubmit={onSubmitForm}>
              <Input
                fluid
                action={{ content: 'Search', onClick: onSubmitForm }}
                placeholder='Search for...'
                value={query}
                onChange={onChangeQuery}
              />
            </Form>
            <RecipesTable {...recipesTableProps} />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  recipes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  query: PropTypes.string,
  onChangeQuery: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeQuery: evt => dispatch(changeQuery(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRecipes());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  recipes: makeSelectRecipes(),
  query: makeSelectQuery(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
