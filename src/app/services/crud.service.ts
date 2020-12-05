import { Prodotto } from '../interfaces/prodotto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  public getProductList() {
    return this.httpClient.get(`http://localhost:8080/api/products`);
  }

  public getProduct(id: string) {
    return this.httpClient.get(`http://localhost:8080/api/products/${id}`);
  }

  public createProduct(data: Prodotto) {
    return this.httpClient.post(`http://localhost:8080/api/products`, data);
  }

  public updateProduct(
    id: string,
    data: {
      nome?: string;
      descrizione?: string;
      prezzo?: number;
      quantita?: number;
    }
  ) {
    return this.httpClient.put(`http://localhost:8080/api/products/${id}`, data);
  }

  public deleteProduct(id: string) {
    return this.httpClient.delete(`http://localhost:8080/api/products/${id}`);
  }

}
