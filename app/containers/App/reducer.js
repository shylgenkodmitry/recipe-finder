/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_RECIPES_SUCCESS,
  LOAD_RECIPES,
  LOAD_RECIPES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    recipes: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'recipes'], false);
    case LOAD_RECIPES_SUCCESS:
      return state
        .setIn(['data', 'recipes'], action.recipes)
        .set('loading', false);
    case LOAD_RECIPES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
