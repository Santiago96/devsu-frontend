import { Injectable } from '@angular/core';
import { Account } from '../account/account';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}/cuenta`).pipe(
  		map((response: Account[]) => response as Account[])
  		);
  }
}
