import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
const routes: Routes = [
  {path:"",component:EmployeeComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"addEmployee",component:AddEmployeeComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"editemployee/:Id",component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
