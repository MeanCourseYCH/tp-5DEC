import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.model';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	employeeForm: FormGroup;
	oldEmpl?: Employee;

	constructor(private service: DataService, private router: Router) {
		this.oldEmpl = this.router.getCurrentNavigation()?.extras.state as Employee;

		if (this.oldEmpl) {
			this.codeFormControl.setValue(this.oldEmpl.code);
			this.nomFormControl.setValue(this.oldEmpl.nom);
			this.prenomFormControl.setValue(this.oldEmpl.prenom);
			this.specialiteFormControl.setValue(this.oldEmpl.specialite);
			this.cinFormControl.setValue(this.oldEmpl.cin);
			this.phoneFormControl.setValue(this.oldEmpl.phone);
			this.emailFormControl.setValue(this.oldEmpl.email);
			this.addressFormControl.setValue(this.oldEmpl.address);
		}
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

	codeFormControl = new FormControl('', [Validators.required]);
	nomFormControl = new FormControl('', [Validators.required]);
	prenomFormControl = new FormControl('', [Validators.required]);
	specialiteFormControl = new FormControl('', [Validators.required]);
	cinFormControl = new FormControl(0, [Validators.required]);
	phoneFormControl = new FormControl(0, [Validators.required]);
	emailFormControl = new FormControl('', [Validators.required]);
	addressFormControl = new FormControl('', [Validators.required]);

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
