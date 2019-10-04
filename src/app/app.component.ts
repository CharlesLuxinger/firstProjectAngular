import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  showAlert = false;

  add(name: string) {
    console.log(name);
    this.name = name;
    this.showAlert = true;
  }
}
