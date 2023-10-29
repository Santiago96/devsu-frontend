import { Account } from "../account/account";
import { Client } from "../client/cliente";

export class Transaction {
    transactionId!: number;
    date!: Date;
    type!: string;
    state!: boolean;
    balanceInitial!: number;
    balanceTransaction!: number;
    movement!: string;
    client!: Client;
    account!: Account;
  }