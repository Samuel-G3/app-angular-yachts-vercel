import { BoatsInterface } from './../../models/Boats';
import { BoatsService } from './../../services/boats.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boats-detail',
  templateUrl: './boats-detail.component.html',
  styleUrls: ['./boats-detail.component.scss']
})
export class BoatsDetailComponent implements OnInit {
  public boats!: BoatsInterface;
  constructor(private activatedRoute: ActivatedRoute, private BoatsService: BoatsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idBoats = params.get('idBoats');

      this.BoatsService.getBoats(idBoats).subscribe((data: any) => {
        const apiResult: BoatsInterface = data;
        this.boats = apiResult;
        console.log("Boats", this.boats)
      })
    })
  }

}
