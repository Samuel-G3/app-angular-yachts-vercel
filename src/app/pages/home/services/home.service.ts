import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class HomeService {
  public homeURL: string = "https://api-boats-samuel-g3.vercel.app/home";
  
  constructor(private httpClient: HttpClient) { }

  public getAllHome() {
    return this.httpClient.get(this.homeURL)
  }
  public getHome(idHome: any) {
    return this.httpClient.get(`${this.homeURL}/${idHome}`)
  }

}
