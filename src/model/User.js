import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  surname: String,
  date: String,
}, {collection:'User'});


export const User = mongoose.model('User', userSchema);