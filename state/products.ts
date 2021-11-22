import { Product, getProduct } from 'api/products';
import { Entities, ID } from 'lib/entities';
import { atom, selectorFamily } from 'recoil';

export const pageProductsState = atom<Entities<Product>>({
  key: 'pageProducts',
  default: {},
});

export const pageProductState = selectorFamily<Product | undefined, ID>({
  key: 'pageProduct',
  get:
    (id) =>
    ({ get }) =>
      get(pageProductsState)[id],
});

export const productQuery = selectorFamily<Product | undefined, ID>({
  key: 'product',
  get:
    (id) =>
    async ({ get }) => {
      const pageProduct = get(pageProductState(id));
      return pageProduct || (await getProduct(id));
    },
});