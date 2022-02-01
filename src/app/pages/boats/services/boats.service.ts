import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoatsService {
  public boatsURL: string = "https://api-boats-samuel-g3.vercel.app/boats";
  
  constructor(private httpClient: HttpClient) { }

  public getAllBoats() {
    return this.httpClient.get(this.boatsURL)
  }
  public getBoats(idBoats: any) {
    return this.httpClient.get(`${this.boatsURL}/${idBoats}`)
  }

}
