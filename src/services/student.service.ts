import mongoose, { Mongoose } from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
);

export interface Student {
  name: string;
  phone: string;
  email: string;
}

export const studentDocument: mongoose.Model<Student> = mongoose.model<Student>(
  'Student',
  studentSchema,
  'Students'
);

export interface StudentViewModel {
  name: string;
  phone: string;
  email: string;
}
export interface StudentRequestModel {
  name: string;
  phone: string;
  email: string;
}

const convert = (model: Student): StudentViewModel => {
  let vm: StudentViewModel = {
    ...JSON.parse(JSON.stringify(model)),
  };
  return vm;
};

export const getAll = async <T extends mongoose.Model<T>>(
  collection: T
): Promise<T[]> => {
  const models = await collection.find().exec();
  // const vms: any = students.map((student) => convert(student));
  return models;
};

export const save = async <T extends mongoose.Model<any>>(
  collection: T,
  payload: any
) => {
  const savedObj = await collection.create(payload);
  return savedObj;
};
