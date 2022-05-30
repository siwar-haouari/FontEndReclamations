import { Etudiant } from './../etudiant/etudiant.model';
import { Enseignant } from './../enseignant/enseignant.model';
export class Pedagogique {
  id!: number;
  sujet! : string;
  description! : string;
  etat! : string;
  enseignant!: Enseignant;
  etudiant!: Etudiant;
}
