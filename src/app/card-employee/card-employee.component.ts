import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-employee',
  templateUrl: './card-employee.component.html',
  //styleUrls: ['./card-employee.component.css'],
  styles: [`
    .card-body{
      text-transform: uppercase;
      color: blue;
    }
  `]
})

export class CardEmployeeComponent {

  @Input() employee: any;

  getCardStyle() {
    return {
      borderWidth: this.employee.id + 'px',
      backgroundColor: this.employee.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    }
  }
}
