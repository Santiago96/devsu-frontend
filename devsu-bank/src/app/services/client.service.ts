import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../client/cliente';
import { map, catchError } from 'rxjs/operators';


import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/cliente`).pipe(
  		map((response: Client[]) => response as Client[])
  		);
  }
}

