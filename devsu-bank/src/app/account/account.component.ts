import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Client } from '../client/cliente';
import { Account } from './account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent  implements OnInit {

  accounts!: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.fetchAllAccounts();
  }

  fetchAllAccounts() {
      this.accountService.getAllAccounts().subscribe((accounts: Account[]) => {
          console.log("accounts: " + accounts);
          this.accounts = accounts;
      });
      
  }

}
