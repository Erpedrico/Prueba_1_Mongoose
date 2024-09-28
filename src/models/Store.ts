import { ObjectId, Schema, model } from "mongoose";

export interface IStore {
    id: number;
    objects: ObjectId;
    name: string;
    countries: string
}


const StoreSchema = new Schema<IStore>({
  id: { type: Number},
  objects: { type: Schema.Types.ObjectId, ref: "Object" },
  name: { type: String },
  countries: { type: String}
});

export const StoreModel =  model("Store", StoreSchema); 