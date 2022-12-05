export interface Employee{
	_id: string;
    code :string
    nom: string
    prenom: string
    specialite: string
    cin : number
    phone : number
    email : string
    address : string
}

export class EmployeeWrapper{
_embedded!: { employees: Employee[]};
}