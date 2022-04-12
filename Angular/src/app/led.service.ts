import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LedI } from './LedI.interface';
import { ResponseI } from './ResponseI.interface';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  constructor(private http : HttpClient) { }

  url : string = environment.url; 

  //FUNCIONES PRINCIPALES DE LED
  getIndexLed():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}Led`); 
  }

  postStoreLed(Led : any):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.url}Led`, Led); 
  }

  getShowLed():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}Led/1`); 
  }

  putUpdateLed(id : number):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}Led`, {}); 
  }

  deleteDestroyLed(id : number):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.url}Led`); 
  }
}
