import {
  IProductsState,
  ProsuctsActionTypes,
  TProsuctsAction,
} from '../../@types/TProducts';

const initialState: IProductsState = {
  products: [],
};

export const productsReduser = (
  state = initialState,
  action: TProsuctsAction,
): IProductsState => {
  switch (action.type) {
    case ProsuctsActionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    default:
      return state;
  }
};
