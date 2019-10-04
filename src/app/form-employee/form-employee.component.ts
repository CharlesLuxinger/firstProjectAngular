import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent {
  id: number = 0;
  name: string;
  showAlert: boolean = false;

  @Output() employeeAdded = new EventEmitter;

  add(name: string) {
    this.showAlert = true;

    const employee = {
      id: ++this.id,
      name: this.name
    };

    this.employeeAdded.emit(employee);
  }

}
