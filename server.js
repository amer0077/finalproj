const express = require('express');
const app = express();


const connectDB = require("./config/connect")


connectDB();

app.use(express.json());


app.use('/api/user', require('./routers/user'));
app.use('/api/post', require('./routers/post'));




const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(` server runing on port ${PORT}`));


