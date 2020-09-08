const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://shop-user:testing123@shop-db.yxccd.mongodb.net/users?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Database connection success');
  } catch (err) {
    console.log(err);
  }
}
module.exports = connectDB;