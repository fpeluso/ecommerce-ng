import { Prodotto } from '../interfaces/prodotto';
export class ProdottoImpl implements Prodotto {
    id: string;
    nome: string;
    descrizione: string;
    prezzo: number;
    quantita: number;
    quantity?: number;
}
