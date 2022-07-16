import { combineReducers } from 'redux';
import { productsReduser } from './productsReduser';

export const rootReducer = combineReducers({
  products: productsReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
