/**
 * Gets the recipes
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { API_ROOT, LOAD_RECIPES } from 'containers/App/constants';
import { recipesLoaded, recipesLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectQuery } from 'containers/HomePage/selectors';

/**
 * Recipes request/response handler
 */
export function* getRecipes() {
  const query = yield select(makeSelectQuery());
  const encodedQuery = encodeURIComponent(query);
  const requestURL = `${API_ROOT}q=${encodedQuery}`;
  let pageIndex = 1;
  let recipesResult = [];
  let iteratorResult = null;

  try {
    while (!iteratorResult || (recipesResult.length < 20 && iteratorResult.results.length > 0)) {
      iteratorResult = yield call(request, `${requestURL}&p=${pageIndex}`);
      recipesResult = recipesResult.concat(iteratorResult.results);
      pageIndex += 1;
    }
    recipesResult = recipesResult.slice(0, 20);
    yield put(recipesLoaded(recipesResult));
  } catch (err) {
    yield put(recipesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* recipesData() {
  // Watches for LOAD_RECIPES actions and calls getRecipes when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_RECIPES, getRecipes);
}
