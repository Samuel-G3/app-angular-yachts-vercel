import { HomeService } from './services/home.service';
import { HomeInterface } from './models/Home';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public home: HomeInterface[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getAllHome().subscribe((data: any) => {
      const apiResults: HomeInterface[] = data;
      

      const formattedHome = apiResults.map(({ imageMain, text, logo1, logo2, logo3, logo4 }) => ({
        imageMain, text, logo1, logo2, logo3, logo4 
      }));
      this.home = formattedHome
    })
  }

}
