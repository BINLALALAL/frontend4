const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// 로거 

const cors = require('cors');
app.use(cors());

const path = require('path');
app.use(express.static( path.join(__dirname, 'views' )));
app.use(express.static( path.join(__dirname, 'public' )));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views') , 'index.html' );
})

app.get('*', (req,res)=>{
    console.log( req.url );
    // res.sendFile(path.join(__dirname, 'views') , '404.html' );
    res.send('Flie no Found');
})

app.listen( PORT, ()=>{
    console.log( `server running on PORT ${PORT}`);
})