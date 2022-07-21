import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public tabEmployee: Employee[] =[]
  constructor(private route:Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    //this.tabEmployee = localStorage.getItem("Employee") == null? null: JSON.parse(localStorage.getItem("Employee")?? "");
    this.employeeService.getAllEmployee().subscribe(data =>{
      this.tabEmployee = data;
    });
  }
  edit(id : number){

    this.route.navigate(["editemployee", id])
  }

}
