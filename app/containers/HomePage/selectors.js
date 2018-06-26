/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectQuery = () => createSelector(
  selectHome,
  (homeState) => homeState.get('query')
);

export {
  selectHome,
  makeSelectQuery,
};
