/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const API_ROOT = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?';
export const LOAD_RECIPES = 'recipefinder/App/LOAD_RECIPES';
export const LOAD_RECIPES_SUCCESS = 'recipefinder/App/LOAD_RECIPES_SUCCESS';
export const LOAD_RECIPES_ERROR = 'recipefinder/App/LOAD_RECIPES_ERROR';
export const DEFAULT_LOCALE = 'en';
