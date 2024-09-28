import { ObjectModel } from '../models/Object';

export const getEntries = {
    getAll: async()=>{
        return await ObjectModel.find();
    },
    findById: async(id:number)=>{
        return await ObjectModel.findOne({'id':id});
    },
    create: async(entry:any)=>{
        return await ObjectModel.create(entry);
    },
    update: async(id:number,body:any)=>{
        console.log(body);
        return await ObjectModel.findOneAndUpdate({'id':id},body,{$new:true});
    },
    delete: async(id:number)=>{
        return await ObjectModel.findOneAndDelete({'id':id});
    }
}