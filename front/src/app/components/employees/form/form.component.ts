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
			code: this.codeFormControl,
			nom: this.nomFormControl,
			prenom: this.prenomFormControl,
			specialite: this.specialiteFormControl,
			cin: this.cinFormControl,
			phone: this.phoneFormControl,
			email: this.emailFormControl,
			address: this.addressFormControl
		});
	}

	codeFormControl = new FormControl('', [ Validators.required ]);
	nomFormControl = new FormControl('', [ Validators.required ]);
	prenomFormControl = new FormControl('', [ Validators.required ]);
	specialiteFormControl = new FormControl('', [ Validators.required ]);
	cinFormControl = new FormControl('', [ Validators.required ]);
	phoneFormControl = new FormControl('', [ Validators.required ]);
	emailFormControl = new FormControl('', [ Validators.required ]);
	addressFormControl = new FormControl('', [ Validators.required ]);

	public hasError = (controlName: string) => {
		return this.employeeForm.controls[controlName].invalid;
	};

	public getErrorMessage = (controlName: string) => {
		let error = '';
		const control = this.employeeForm.controls[controlName];
		if (control.touched && control.errors != null) {
			error = Object.keys(control.errors)[0];
		}
		return error;
	};
	
	

	onSubmit() {
		console.log(this.employeeForm.value);
		console.log(this.employeeForm.valid);
		this.codeFormControl.markAsTouched();
		this.nomFormControl.markAsTouched();
		this.prenomFormControl.markAsTouched();
		this.specialiteFormControl.markAsTouched();
		this.cinFormControl.markAsTouched();
		this.phoneFormControl.markAsTouched();
		this.emailFormControl.markAsTouched();
		this.addressFormControl.markAsTouched();
		
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
