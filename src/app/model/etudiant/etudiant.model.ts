import { Groupe } from './../groupe/groupe';
export class Etudiant {

  id!: number;
  cin!:number;
  nom!:string;
  prenom!:string;
  matricule!:string;
  username!:string;
  email!:string;
  password!:string;
  groupe!:Groupe;



}
