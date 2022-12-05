import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

	constructor(private dataService: DataService) { }

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
}
