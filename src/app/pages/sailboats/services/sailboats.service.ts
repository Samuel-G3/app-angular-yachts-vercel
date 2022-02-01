import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SailboatsService {
   
 
  public sailboatsURL: string = "https://api-boats-samuel-g3.vercel.app/sailboats";
  
  constructor(private httpClient: HttpClient) { }

  public getAllSailboats() {
    return this.httpClient.get(this.sailboatsURL)
  }
  public getSailboats(idSailboats: any) {
    return this.httpClient.get(`${this.sailboatsURL}/${idSailboats}`)
  }

}
