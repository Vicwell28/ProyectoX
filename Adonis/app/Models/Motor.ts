import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Motor {
  idMotor : number, 
  date : Date, 
  Motor_Delante : number,
  Motor_Reversa : number,
  Motor_Derecha : number,
  Motor_Izquieda : number,
  Motor_Apagado : number,
}

export default class MotorModel{
  // 2. Create a Schema corresponding to the document interface.
  static schema = new Schema<Motor>({
    idMotor : { type : Number, required : true},
    date : { type : Date, required : true},
    Motor_Delante : {type: Number, required : true}, 
    Motor_Reversa : {type: Number, required : true}, 
    Motor_Derecha : {type: Number, required : true}, 
    Motor_Izquieda : {type: Number, required : true}, 
    Motor_Apagado : {type: Number, required : true}, 
  });

  // 3. Create a Model.
  static MotorModel = model<Motor>('Motor', this.schema);
}
