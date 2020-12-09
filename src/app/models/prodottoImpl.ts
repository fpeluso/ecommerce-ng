import { Prodotto } from '../interfaces/prodotto';
export class ProdottoImpl implements Prodotto {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity?: number;
}
