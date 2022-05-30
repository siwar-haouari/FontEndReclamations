import { Etudiant } from './../etudiant/etudiant.model';
export class Administrative {
  id!: number;
  sujet! : string;
  description! : string;
  etat! : string;
  username!: String;
  etudiant!: Etudiant;
}
