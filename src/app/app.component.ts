import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  add() {
    console.log(this.name);
  }

  updateName(event: any) {
    this.name = event.target.value;
  }
}
