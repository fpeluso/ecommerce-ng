import { ProdottoImpl } from '../models/prodottoImpl';
export interface ItemsInCart {
    item: ProdottoImpl;
    quantity: number;
    isQuantityEdit: boolean;
}