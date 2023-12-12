import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant.spec';
import { Specialite } from '../models/specialite.spec';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

public tabEtudiant = [
  new Etudiant ("Ouhrouche", "Bilal", "Des plantes", "77", "Meaux", "ouhrouche@gmail.com", "Homme", 20, 12345),
  new Etudiant ("Djeassittaram", "Balakumar", "Flanades", "95", "Sarcelles", "Djeas@gmail.com", "Homme", 20, 54321),
  new Etudiant ("Maille", "Chô", "Gare", "95", "Garge", "Maillechô@gmail.com", "Femme", 23, 25325),
  new Etudiant ("François", "Titouan", "Blanchart", "77", "Plessi", "François@gmail.com", "Homme", 19, 39450),
  new Etudiant ("Khelifi", "Feryel", "Chateau", "77", "Pontault", "khefta@gmail.com", "femme", 20, 12043),
  new Etudiant ("Gueppois", "Karen", "Chateau", "77", "Meaux", "Guep@gmail.com", "Femme", 21, 56803),
  new Etudiant ("Samaké", "Moussa", "Fleurie", "77", "Torcy", "Samake@gmail.com", "Homme", 20, 20493),
  new Etudiant ("Germain", "Tessa", "Lourd", "75", "Paris", "TG@gmail.com", "Femme", 20, 43902),
  new Etudiant ("Sow", "Mamadou", "Villard", "75", "Paris", "doumams@gmail.com", "Homme", 23, 52902),
  new Etudiant ("Boukari", "Moussa", "JeanMoulin", "75", "Paris", "Bouks@gmail.com", "Homme", 20, 436302),
]

  constructor() { }
}
