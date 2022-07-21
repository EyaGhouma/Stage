import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeSelectorComponent } from '@progress/kendo-angular-dateinputs';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../model/employee';
import Swal from 'sweetalert2'
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  userForm!:FormGroup
  id!: number;
  employees!: Employee[]
  constructor(private route:ActivatedRoute ,private router:Router ,private employeeService:EmployeeService )  { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(0),
      name :  new FormControl("", Validators.required),
      email:  new FormControl("", Validators.required),
      phone : new FormControl("", Validators.required),
      salary: new FormControl("",Validators.required),
      department: new FormControl("",Validators.required)
      });
      let id =this.route.snapshot.paramMap.get('Id');
      this.employeeService.getEmployeeById(id).subscribe(data=>
        {
       //this.userForm.controls["Name"].setValue(data.name)
         this.userForm.patchValue(data);
        })
  // this.employees/*array*/ =localStorage.getItem("Employee") == null? null: JSON.parse(localStorage.getItem("Employee")?? "");
  // let id =this.route.snapshot.paramMap.get('Id');
  //     this.id = id != null ?+id : 0;/*+id:0 pk + et pk 0*/
  //   let employee : Employee= this.employees.find(x => x.Id == this.id)?? {} as Employee;
  //   this.userForm.patchValue(employee/*objet*/);
    //this.userForm.controls["Name"].setValue(employee.Name)
  //localStorage.setItem('Employee',JSON.stringify(employees))
}
  edit(){
    let user = this.userForm.getRawValue();
   // let index = this.employees.findIndex(x=>x.id==this.id);
   // this.employees[index] = user;
    //localStorage.setItem('Employee',JSON.stringify(this.employees))
    this.employeeService.updateEmployee(user).subscribe(data => {
      this.router.navigate(['/employee'])
  } )

  }
  deleteEmp(){
    Swal.fire({
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        /*let index = this.employees.findIndex(x=>x.Id==this.id);
  this.employees = this.employees.filter(x => x.Id != this.id);
  localStorage.setItem('Employee',JSON.stringify(this.employees))
  this.router.navigate(['/employee'])*/
  let user = this.userForm.getRawValue();
  this.employeeService.deleteEmployee(user).subscribe(data => {
    console.log(data);
    this.router.navigate(['/employee'])
} )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}

