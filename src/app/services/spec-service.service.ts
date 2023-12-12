import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite.spec';

@Injectable({
  providedIn: 'root'
})
export class SpecServiceService {

  public tabSpec = [
    new Specialite ("Informatique", 1),
    new Specialite ("Graphisme", 2),
    new Specialite ("Informatique", 1),
    new Specialite ("Communication", 3),
    new Specialite ("Informatique", 1),
    new Specialite ("Graphisme", 2),
    new Specialite ("Communication", 3),
  ]

  constructor() { }
}
