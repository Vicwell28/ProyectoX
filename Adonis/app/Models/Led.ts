import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Led {
  idLed : number, 
  date : Date, 
  Status : number
}

export default class LedModel{
  // 2. Create a Schema corresponding to the document interface.
  static schema = new Schema<Led>({
    idLed : { type : Number, required : true},
    date : { type : Date, required : true},
    Status : {type: Number, required : true}
  });

  // 3. Create a Model.
  static LedModel = model<Led>('Led', this.schema);
}
