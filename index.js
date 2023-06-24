const mongoose = require('mongoose')
const express = require('express')
const port = process.env.PORT || 1800;
const app = express();
const MONGODB_URI = "mongodb+srv://Naman_Verma:OA3vct6fPNU9SNN5@clustersih2022.kyg4jf6.mongodb.net/?retryWrites=true&w=majority"//'mongodb://localhost/SIH'
const postRoute = require('./route/posts')

const {json} = require('body-parser')
var cors = require('cors');



app.use(json());
app.use(cors())

app.use("/", postRoute);

//const options = {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    useFindAndModify: false,
//    useCreateIndex: true,
//  };
   


const start = async () => {
    mongoose.Promise = global.Promise;

    await mongoose.connect(MONGODB_URI);

    app.listen(port || port, async () => {
        console.log(`Server Connected To Port: ${port}`)
        
    });

};

start();