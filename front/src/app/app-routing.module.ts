import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormComponent } from './components/employees/form/form.component';

const routes: Routes = [
	{ path: '', component:EmployeesComponent},
	{ path: 'add', component:FormComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
