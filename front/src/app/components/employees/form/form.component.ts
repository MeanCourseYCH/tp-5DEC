import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	employeeForm: FormGroup;

	constructor(private service: DataService, private router: Router) {
		this.employeeForm = new FormGroup({
			code: new FormControl('', [Validators.required]),
			nom: new FormControl('', [Validators.required]),
			prenom: new FormControl('', [Validators.required]),
			specialite: new FormControl('', [Validators.required]),
			cin: new FormControl('', [Validators.required]),
			phone: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required]),
			address: new FormControl('', [Validators.required]),
		});
	}

	

	onSubmit() {
		console.log(this.employeeForm.value);
		console.log(this.employeeForm.valid);
		if (this.employeeForm.valid) {
			this.service.addEmployee(this.employeeForm.value).subscribe((res) => {
				if (res) {
					this.router.navigate(['']);
				}
			})
		}
	}


	ngOnInit(): void {
	}

}
