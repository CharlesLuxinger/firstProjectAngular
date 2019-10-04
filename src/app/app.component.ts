import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number = 0;
  name: string;
  showAlert: boolean = false;

  employees = [];

  add(name: string) {
    this.showAlert = true;

    this.employees.push({
      id: ++this.id,
      name: this.name
    });
  }
}
