import { ProsuctsActionTypes, TProductItem } from '../../@types/TProducts';

export const addProductAction = (payload: TProductItem) => {
  return { type: ProsuctsActionTypes.ADD_PRODUCT, payload };
};
