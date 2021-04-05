import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    this.getEmployees();
  }

  public employees : Employee[];

  constructor(private employeeService: EmployeeService){}

  public getEmployees() : void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[]) => {
        this.employees = response;
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

}
