import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardEmployeeComponent } from './card-employee/card-employee.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CardEmployeeComponent,
    FormEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
