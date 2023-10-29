import { Client } from "../client/cliente";

export class Account {
    numberAccount!: number;
    balance!: number;
    state!: boolean;
    type!: string;
    client!: Client; 
    
  }