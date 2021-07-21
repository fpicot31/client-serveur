const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://francois:francois@localhost:27017/demo',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connexion ok !');
  })
  .catch((err) => {
    console.log(err);
  });
