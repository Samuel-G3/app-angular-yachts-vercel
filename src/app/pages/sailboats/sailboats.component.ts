import { Component, OnInit } from '@angular/core';
import { SailboatsInterface } from './models/Sailboats';
import { SailboatsService } from './services/sailboats.service';

@Component({
  selector: 'app-sailboats',
  templateUrl: './sailboats.component.html',
  styleUrls: ['./sailboats.component.scss']
})
export class SailboatsComponent implements OnInit {
public sailboats: SailboatsInterface[] = []
  constructor(private sailboatsService: SailboatsService) { }

  ngOnInit(): void {
    this.sailboatsService.getAllSailboats().subscribe((data: any) =>{
      const apiResults: SailboatsInterface[] = data;

      const formattedSailboats = apiResults.map(({ id, company, model, length, beam, engine, image, image2, image3, image4, image5, text}) => ({
        id, company, model, length, beam, engine, image, image2, image3, image4, image5, text
      }));
      this.sailboats = formattedSailboats
    })
  }

}
