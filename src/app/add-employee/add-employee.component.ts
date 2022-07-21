import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from "../model/employee";
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  userForm!:FormGroup
  constructor(private route:Router ,private employeeService:EmployeeService) { }
  ngOnInit(): void {
this.userForm = new FormGroup({
Name :  new FormControl("", Validators.required),
Email:  new FormControl("", Validators.required),
Phone :  new FormControl("", Validators.required),
Salary: new FormControl("",Validators.required),
Department: new FormControl("",Validators.required)
})

  }
  public getnom() : FormControl{
    return this.userForm.controls['name'] as FormControl;
  }



  AddEmp(){
    let user = this.userForm.getRawValue();
    this.employeeService.addEmployee(user).subscribe( data =>{
      console.log(data);
      this.route.navigate(['/employee'])
  });
    /*let employees : Employee[] =localStorage.getItem("Employee") == null? null: JSON.parse(localStorage.getItem("Employee")?? "");
    if(employees == null){
      employees = [];
    }
    user.Id = employees.length + 1;
      employees.push(user);

    localStorage.setItem('Employee',JSON.stringify(employees))*/


  }
}
