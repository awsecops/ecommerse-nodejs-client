import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(){
    const serverURL = 'https://api-ecommerse.iconevent.in/api/';
    localStorage.setItem('ServerUrl', serverURL);
  }
}
