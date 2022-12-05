export interface Employee{
    code :number
    nom: String
    prenom: String
    specialite: String
    cin : number
    phone : number
    email : String
    address : String
}

export class EmployeeWrapper{
_embedded!: { employees: Employee[]};
}