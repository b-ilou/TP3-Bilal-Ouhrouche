import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant.spec';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.css'],
})
export class EtudiantHorsParisComponent implements OnInit {

  @Input() messageChild: string = '';

  tabEtudiant?: Etudiant[];

  constructor(private etudiantService: EtudiantServiceService) {}

  ngOnInit(): void {
    this.tabEtudiant = this.etudiantService.tabEtudiant;
  }

}
