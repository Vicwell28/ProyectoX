import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseI } from './ResponseI.interface';

@Injectable({
  providedIn: 'root'
})
export class MotorService {

  url : string = environment.url; 

  constructor(private http : HttpClient) { }

  //FUNCIONES PRINCIPALES DE motor
  getIndexmotor():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}motor`); 
  }

  postStoremotor(motor : any):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.url}motor`, motor); 
  }

  getShowmotor():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}motor/1`); 
  }

  putUpdatemotor(id : number):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}motor`, {}); 
  }

  deleteDestroymotor(id : number):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.url}motor`); 
  }
}
