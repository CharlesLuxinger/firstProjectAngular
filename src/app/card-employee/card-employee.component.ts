import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-employee',
  templateUrl: './card-employee.component.html',
  styleUrls: ['./card-employee.component.css']
})

export class CardEmployeeComponent {

  @Input() employee: any;

}
