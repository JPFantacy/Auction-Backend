const mongoose = require('mongoose');

module.exports = function () {
  return mongoose.connect(
    'mongodb+srv://jeyaprabu500:jeyaprabu500@cluster0.puu2kop.mongodb.net/auction-angular',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
