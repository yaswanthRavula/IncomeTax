import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../shared/client';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   url="http://localhost:8080/clients/"

  constructor(private http:HttpClient) { }

  addClient(client:Client){
    return this.http.post(this.url,client);
  } 
}
