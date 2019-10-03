import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  activeButton: boolean = true;
  add(name: string) {
    console.log(name);
    this.name = name;
  }

  activeBtn(event: any) {
    this.activeButton = event.target.value.length == 0;
  }
}
