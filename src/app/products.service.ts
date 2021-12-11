import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public _HttpClient:HttpClient) { }

  getproducts():Observable<any>
  {
 
   return this._HttpClient.get('https://fakestoreapi.com/products')
  }
  getProductDetails(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`)
  }

  addProduct(data:any):Observable<any>
  {
    return this._HttpClient.post("https://fakestoreapi.com/products",data)
  }

  updateProduct(id:number,data:any):Observable<any>
  {
    return this._HttpClient.put(`https://fakestoreapi.com/products/${id}`,data)
  }    

  deleteProduct(id:number):Observable<any>
  {
    return this._HttpClient.delete(`https://fakestoreapi.com/products/${id}`)
  }

  sortProduct(data:string):Observable<any>
  {
    return this._HttpClient.get(`https://fakestoreapi.com/products?sort=${data}`)
  }



}
