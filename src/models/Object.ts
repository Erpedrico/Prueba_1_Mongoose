import { Schema, model } from "mongoose";

export interface IObject {
    id: number;
    name: string;
    price: number;
    description: string;
}

const ObjectSchema = new Schema<IObject>({
  id: { type: Number},
  name: { type: String },
  price: { type: Number},
  description: { type: String }
});

export const ObjectModel =  model("Object", ObjectSchema); 