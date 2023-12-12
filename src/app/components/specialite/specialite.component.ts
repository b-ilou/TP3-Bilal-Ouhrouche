import { Component } from '@angular/core';
import { Specialite } from 'src/app/models/specialite.spec';
import { SpecServiceService } from 'src/app/services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent {

  //Utilisation de la directive NgFor
  tabSpec?: Specialite[];

  constructor(private specialiteService: SpecServiceService) {}

  ngOnInit(): void {
    this.tabSpec = this.specialiteService.tabSpec;
  }

}
