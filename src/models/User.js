import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashPassword: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  profilepic: {
    type: String,
    default: 'https://via.placeholder.com/468x60?text=Default+Image',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// eslint-disable-next-line max-len
UserSchema.methods.comparePassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);

module.exports = mongoose.model('myUser', UserSchema);
