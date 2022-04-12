import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Estrella {
  idUser : number, 
  idVehiculo : number, 
  Estrella : number
}

export default class EstrellaModel{
  // 2. Create a Schema corresponding to the document interface.
  static schema = new Schema<Estrella>({
    idUser : { type : Number, required : true},
    idVehiculo : { type : Number, required : true},
    Estrella : {type: Number, required : true}
  });

  // 3. Create a Model.
  static EstrellaModel1 = model<Estrella>('Estrella', this.schema);
}
