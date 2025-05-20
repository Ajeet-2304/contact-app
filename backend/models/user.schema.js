import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type:String,
    required: true,
    validator: {
      validate: function(value) {
        return value.length > 0 && /^[\p{L}\p{M} \-']{2,50}$/u.test(value);
      },
      message: 'Name cannot be empty or invalid'
    }
  }, // String is shorthand for {type: String}
  userName: {
    type:String,
    required: true,
    unique: true,
    validator: {
      validate: function(value) {
        return value.length > 0 && /^[a-zA-Z0-9](?:[a-zA-Z0-9._]{1,28}[a-zA-Z0-9])?$/.test(value);
      },
      message: 'Username cannot be empty or invalid'
    }
    
  },
  phone: {
    type:String,
    required: true,
    unique: true,
    validator: {
      validate: function(value) {
        return value.length > 0 && /^\+?[0-9]{10,15}$/.test(value);
      },
      message: 'Phone number cannot be empty or invalid'
    }
    
  },
  address: {
    type:String,
    required: true,
    validator: {
      validate: function(value) {
        return value.length > 0 && /^[\p{L}\p{M} \-']{2,50}$/u.test(value);
      },
      message: 'Name cannot be empty or invalid'
    }
  },
  country: {
    type:String,
    required: true,
    validator: {
      validate: function(value) {
        return value.length > 0 && /^[\p{L}\p{M} \-']{2,50}$/u.test(value);
      },
      message: 'Name cannot be empty or invalid'
    }
  }
});

const User = mongoose.model('User', UserSchema);
export default User;