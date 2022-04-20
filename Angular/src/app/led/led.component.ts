import { Component, OnInit } from '@angular/core';
import { LedService } from '../led.service';
import { MotorService } from '../motor.service';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  status : any = ''; 
  Numero = 1; 
  

  delante : any; 
  reversa : any;
  stop : any; 
  derecha : any; 
  izquieda : any;

  constructor(
    private apiLed : LedService, 
    private motor : MotorService
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

    this.motor.getIndexmotor().subscribe(datos => {
      this.delante = datos.data[0].Motor_Delante; 
      this.reversa = datos.data[0].Motor_Reversa; 
      this.stop = datos.data[0].Motor_Apagado; 
      this.derecha = datos.data[0].Motor_Derecha; 
      this.izquieda = datos.data[0].Motor_Izquieda; 
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


  //METODOS DEL CARRITO 
  Adelante(){
    const body = {
      "Motor_Delante" : 1, 
      "Motor_Reversa" : 0, 
      "Motor_Derecha" : 0, 
      "Motor_Izquieda" : 0, 
      "Motor_Apagado" : 0 
    }

    this.motor.postStoremotor(body).subscribe(datos => {console.log(datos),this.ngOnInit()});
  }

  Izquierda(){
    const body = {
      "Motor_Delante" : 0, 
      "Motor_Reversa" : 0, 
      "Motor_Derecha" : 0, 
      "Motor_Izquieda" : 1, 
      "Motor_Apagado" : 0 
    }

    this.motor.postStoremotor(body).subscribe(datos => {console.log(datos),this.ngOnInit()});
  }

  Stop(){
    const body = {
      "Motor_Delante" : 0, 
      "Motor_Reversa" : 0, 
      "Motor_Derecha" : 0, 
      "Motor_Izquieda" : 0, 
      "Motor_Apagado" : 1 
    }

    this.motor.postStoremotor(body).subscribe(datos => {console.log(datos),this.ngOnInit()});
  }

  Derecha(){
    const body = {
      "Motor_Delante" : 0, 
      "Motor_Reversa" : 0, 
      "Motor_Derecha" : 1, 
      "Motor_Izquieda" : 0, 
      "Motor_Apagado" : 0 
    }

    this.motor.postStoremotor(body).subscribe(datos => {console.log(datos),this.ngOnInit()});
  }

  Reversa(){
    const body = {
      "Motor_Delante" : 0, 
      "Motor_Reversa" : 1, 
      "Motor_Derecha" : 0, 
      "Motor_Izquieda" : 0, 
      "Motor_Apagado" : 0 
    }

    this.motor.postStoremotor(body).subscribe(datos => {console.log(datos),this.ngOnInit()});
  }

}
