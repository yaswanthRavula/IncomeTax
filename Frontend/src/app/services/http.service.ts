import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../shared/client';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   url="https://income-tax-alpha.vercel.app/clients/"

  constructor(private http:HttpClient) { }

  addClient(client:Client){
    return this.http.post(this.url,client);
  } 
  getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }
}
