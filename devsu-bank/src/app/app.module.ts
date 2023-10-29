import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:'' , redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes' , component: ClientComponent},
  {path: 'cuentas' , component: AccountComponent},
  {path: 'movimientos' , component: TransactionsComponent},
  {path: 'reportes' , component: ReportsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AccountComponent,
    TransactionsComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
