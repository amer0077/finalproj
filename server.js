const express = require('express');
const app = express();


const connectDB = require("./config/connect")


connectDB();

app.use(express.json());


app.use('/api/user', require('./routers/user'));
app.use('/api/post', require('./routers/post'));


if (process.env.NODE_ENV === "production") {


    app.use(express.static("client/build"))
    
    app.get("/*" , (req, res)=>{
        res.sendFile(path.resolve(__dirname, "../client" , "build" , "index.html"))
    })
    }

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(` server runing on port ${PORT}`));


