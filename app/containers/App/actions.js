/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_RECIPES,
  LOAD_RECIPES_SUCCESS,
  LOAD_RECIPES_ERROR,
} from './constants';

/**
 * Load the recipes, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_RECIPES
 */
export function loadRecipes() {
  return {
    type: LOAD_RECIPES,
  };
}

/**
 * Dispatched when the recipes are loaded by the request saga
 *
 * @param  {array} recipes The recipes data
 *
 * @return {object}      An action object with a type of LOAD_RECIPES_SUCCESS passing the recipes
 */
export function recipesLoaded(recipes) {
  return {
    type: LOAD_RECIPES_SUCCESS,
    recipes,
  };
}

/**
 * Dispatched when loading the recipes fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_RECIPES_ERROR passing the error
 */
export function recipesLoadingError(error) {
  return {
    type: LOAD_RECIPES_ERROR,
    error,
  };
}
