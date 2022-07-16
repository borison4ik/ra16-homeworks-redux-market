export type TProductItem = {
  id: string;
  title: string;
  url: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  saleBadge: string;
};

export type IProductsState = {
  products: TProductItem[];
};

export enum ProsuctsActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

type IAddProsuctsAction = {
  type: ProsuctsActionTypes.ADD_PRODUCT;
  payload: TProductItem;
};

export type TProsuctsAction = IAddProsuctsAction;
