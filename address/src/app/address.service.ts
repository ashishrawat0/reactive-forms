import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }
  post(address){
    console.log(address)
    return this.http.post("http://localhost:3000/api/address",address)
  }

}
