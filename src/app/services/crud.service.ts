import { Prodotto } from '../interfaces/prodotto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }
  endpoint = `http://localhost:8081/api/v1/products`;

  public getProductList() {
    return this.httpClient.get(this.endpoint);
  }

  public getProduct(id: string) {
    return this.httpClient.get(`${this.endpoint}/${id}`);
  }

  public createProduct(data: Prodotto) {
    return this.httpClient.post(this.endpoint, data);
  }

  public updateProduct(
    id: string,
    data: {
      name?: string;
      description?: string;
      price?: number;
      quantity?: number;
    }
  ) {
    return this.httpClient.put(`${this.endpoint}/${id}`, data);
  }

  public deleteProduct(id: string) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

}
