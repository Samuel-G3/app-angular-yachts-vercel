import { BoatsService } from './services/boats.service';
import { BoatsInterface } from './models/Boats';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.scss']
})
export class BoatsComponent implements OnInit {
  public boats: BoatsInterface[] = [];
  constructor(private boatsService: BoatsService) { }

  ngOnInit(): void {
    this.boatsService.getAllBoats().subscribe((data: any) => {
      const apiResults: BoatsInterface[] = data;

      const formattedBoats = apiResults.map(({ id, company, model, length, beam, engine, image, image2, image3, image4, image5, text }) => ({
        id, company, model, length, beam, engine, image, image2, image3, image4, image5, text
      }));
      this.boats = formattedBoats
    })
  }

}
