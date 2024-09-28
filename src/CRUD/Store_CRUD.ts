import { StoreModel } from '../models/Store';

export const getEntries = {
    getAll: async()=>{
    return await StoreModel.find();
    },
    findById: async(id:number)=>{
        return await StoreModel.findOne({'id':id});
    },
    findObjects: async(id:number)=>{
        return await StoreModel.findOne({'id':id}).populate('objects');
    },
    create: async(entry:any)=>{
        return await StoreModel.create(entry);
    },
    update: async(id:number,body:any)=>{
        console.log(body);
        return await StoreModel.findOneAndUpdate({'id':id},body,{$new:true});
    },
    delete: async(id:number)=>{
        return await StoreModel.findOneAndDelete({'id':id});
    }
}