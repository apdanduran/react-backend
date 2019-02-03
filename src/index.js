import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes';
import mongoose from 'mongoose';


mongoose.connect('mongodb://deneme:deneme123@ds119795.mlab.com:19795/duranapdan10', {useNewUrlParser: true});
 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AuthRouter(app);

app.get('/', (req, res) => {
    res.send('Eğitimbudur Rest API');
});


app.listen(3300, () => console.log("Çalıştı.."))