import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = environment.BackUrl;
  constructor(private http:HttpClient) {
   }

   public getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url.concat("Employee"));
   }
   public addEmployee(employee : any):Observable<Employee>{
    return this.http.post<Employee>(this.url.concat("Employee"), employee);
   }
   public deleteEmployee(employee:Employee):Observable<Employee>{
     return this.http.delete<Employee>(this.url.concat("Employee").concat("/")+employee.id);
    }
    public updateEmployee(employee:Employee):Observable<Employee>{
      return this.http.put<Employee>(this.url.concat("Employee")+ "/"+ employee.id,employee);
     }
     public getEmployeeById(id:any):Observable<Employee>{
      return this.http.get<Employee>(this.url.concat("Employee").concat("/").concat(id))
     }
   }

