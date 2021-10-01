import express, { Application } from 'express';
import router from './controllers/routes';
import mongoose from 'mongoose';
import cors from 'cors';

const mongooseSetup = async () => {
  const uri = 'mongodb://127.0.0.1:27017/academyNodeServer';
  const options: mongoose.ConnectOptions = {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  await mongoose
    .connect(uri, options)
    .then(() => console.log('Mongodb Connected'))
    .catch((err) => console.log(err));
};

const init = (): Application => {
  let app = express();
  app.use(express.json());
  app.use(cors());

  app.use('/api', router);

  app.use('/', (req, res) => {
    res.send('Hey! Today is: ' + new Date());
  });

  return app;
};

const app = init();
// Connect with mongodb
mongooseSetup();
const port = 5000;
app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
