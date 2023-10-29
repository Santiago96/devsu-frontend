import { Component, OnInit } from '@angular/core';
import { Transaction } from './transactions';
import { Account } from '../account/account';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions!: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.fetchAllAccounts();
  }

  fetchAllAccounts() {
      this.transactionService.getAllTransactions().subscribe((transactions: Transaction[]) => {
          console.log("transactions: " + transactions);
          this.transactions = transactions;
      });
      
  }

}
