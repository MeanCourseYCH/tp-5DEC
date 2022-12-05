import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.model';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

	constructor(private dataService: DataService,private router:Router) { }

	employees: any;
	ngOnInit(): void {
		this.getEmployeeData();
	}
	getEmployeeData() {
		//console.log('hello employees');
		this.dataService.getAllEmployees().subscribe(res => {
			console.log(res);
			this.employees = res;
		});
	}

	editEmployee(empl: Employee) {
		this.router.navigateByUrl('/add',{state:empl});
	}

	deleteEmployee(id: any) {
		if (confirm("Are you sure to delete this employee?")) {
			this.dataService.deleteEmployee(id).subscribe(res => {
				console.log(res);
				this.getEmployeeData();
			});
		}
	}
}
