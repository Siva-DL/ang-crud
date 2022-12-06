import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetCallService {
  productUrl: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  fetchAllProducts() {
    return this.http.get<any>(this.productUrl);
  }

  fetchProduct(id: number) {
    return this.http.get(`${this.productUrl}/${id}`);
  }
}
