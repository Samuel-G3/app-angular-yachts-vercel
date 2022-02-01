import { SailboatsInterface } from './../../models/Sailboats';
import { SailboatsService } from './../../services/sailboats.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sailboats-detail',
  templateUrl: './sailboats-detail.component.html',
  styleUrls: ['./sailboats-detail.component.scss'],
})
export class SailboatsDetailComponent implements OnInit {
  public sailboats!: SailboatsInterface;
  constructor(
    private activatedRoute: ActivatedRoute,
    private SailboatsService: SailboatsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idSailboats = params.get('idSailboats');

      this.SailboatsService.getSailboats(idSailboats).subscribe((data: any) => {
        const apiResult: SailboatsInterface = data;
        this.sailboats = apiResult;
      });
    });
  }
}
