import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  surname: String,
  date: String,
  friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
  projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
}, {collection:'User'});


export const User = mongoose.model('User', userSchema);