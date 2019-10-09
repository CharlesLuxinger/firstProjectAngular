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

}
