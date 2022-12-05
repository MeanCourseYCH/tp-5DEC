import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http:HttpClient) { }   
  getAllEmployees():Observable<Employee[]>{
	return this.http.get<Employee[]>("http://127.0.0.1:8080/customers");
  }
   
}