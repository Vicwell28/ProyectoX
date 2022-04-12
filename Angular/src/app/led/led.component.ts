import { Component, OnInit } from '@angular/core';
import { LedService } from '../led.service';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  status : any = ''; 
  Numero = 1; 

  constructor(
    private apiLed : LedService
  ) { }

  ngOnInit(): void {
    this.apiLed.getIndexLed().subscribe(datos => {
      this.Numero = datos.data[0].Status; 
      console.log(this.Numero); 

      if(this.Numero == 1){
        this.status = "ON";
      }
      else{
        this.status = "OFF";
      }
    })  
  }


  enviar(){
    this.apiLed.postStoreLed({"status" : this.Numero}).subscribe(datos => {
      console.log(datos);
    })

    if(this.Numero){
      this.Numero = 0; 
      this.status = "OFF"
    }
    else{
      this.Numero = 1; 
      this.status = "ON"
    }
    
  }

}
