import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devsu-bank';
  imageSource = 'assets/images/logo_bank.png';

  constructor() {
  }
}
