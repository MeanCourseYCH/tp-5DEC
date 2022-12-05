import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) { }
	getAllEmployees(): Observable<Employee[]> {
		return this.http.get<Employee[]>("http://127.0.0.1:8080/customers");
	}

	addEmployee(employee: Employee): Observable<Employee> {
		return this.http.post<Employee>("http://127.0.0.1:8080/customers", employee);
	}

	deleteEmployee(id: number): Observable<Employee> {
		return this.http.delete<Employee>("http://127.0.0.1:8080/customers/" + id);
	}

	updateEmployee(employee: Employee): Observable<Employee> {
		return this.http.put<Employee>("http://127.0.0.1:8080/customers/" + employee._id, employee);
	}

}
