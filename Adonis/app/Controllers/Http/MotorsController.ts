import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MotorModel from 'App/Models/Motor'

import { connect } from 'mongoose';

const url = 'mongodb+srv://VicWell:vicwell@sandbox.rwi8f.mongodb.net/sensoresDB?retryWrites=true';
const Motor = MotorModel.MotorModel; 

export default class MotorsController {

  public async index({ response }: HttpContextContract) {
      try{
        await connect(url);
        const com = await Motor.aggregate([
          {
            '$sort': {
              'date': -1
            }
          }, {
            '$limit': 1
          }
        ]) 
  
        response.status(200).json({
          message: 'Successfully created a new model.',
          data: com
        })
      }
      catch(error){
        response.status(404).json({
          message : "Failing created a new model."
        })
      }
      
    }
  
    public async store({response, request}: HttpContextContract) {
      try {
        await connect(url);
        const com = new Motor({
          idMotor : 1, 
          date : new Date(), 
          Motor_Delante : request.input('Motor_Delante'),
          Motor_Reversa : request.input('Motor_Reversa'),
          Motor_Derecha : request.input('Motor_Derecha'),
          Motor_Izquieda : request.input('Motor_Izquieda'),
          Motor_Apagado : request.input('Motor_Apagado'),
        })

        await com.save()
        
        response.status(200).json({
          message: 'Successfully created a new model.',
          data: com
        })
  
      } catch (error) {
        response.status(400).json({
          message : "Failing created a new model."
        })
      }
    }
  
    public async show({params, response}: HttpContextContract) {
      try{
        await connect(url);
        console.log(params.id);
        const com = await Motor.aggregate([
                {
                    '$sort': {
                        'date': -1
                    }
                }, {
                    '$limit': 1
                }
            ]);
        console.log(params.id); 
  
        response.status(200).json({
          massage : "Satifactorio. Usuario encontrado",
          data : com
        })
      }
      catch(error){
        response.status(400).json({
          massage : "Error. Usuario no enocntrado.",
        })
      }
    }
  
  
    public async update({request, response}: HttpContextContract) {
      try{
        await connect(url);

        const last = await Motor.aggregate([
          {
            '$sort': {
              'date': -1
            }
          }, {
            '$limit': 1
          }
        ])
        
        const com = await Motor.updateOne(last, 
        {
          Status : request.input('status')
        })
        
        response.status(200).json({
          massage : "Satifactorio. Usuario encontrado y actualizado.",
          data : com
        })
      }
      catch(error){
        response.status(400).json({
          massage : "Error. Usuario no enocntrado.",
        })
      }
    }
  
    public async destroy({params, response}: HttpContextContract) {
      try{
        await connect(url);
        const com = await Motor.findByIdAndDelete(params.id); 
        
        response.status(200).json({
          massage : "Satifactorio. Marca encontrado y eliminado.",
          data: com
        })
      }
      catch{
        response.status(200).json({
          massage : "Error. Marca no encontrado.",
        })
      }
    }

}