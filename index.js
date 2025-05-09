const express = require("express");
const app = express();
const port = 3000;

// loading middleware into app 
app.use(express.json());
// express.json();

// middleware - loggin - authentciation - validation 

// creation of middleware 
const logginMiddleware = function(req, res, next) {
    console.log("Loggin In Done");
    // res.send("loggin Done");
    next();  // go to the next middleWare
}

// loading middleware into app
app.use(logginMiddleware);

const authentciationMiddleWare = function(req, res, next) {
    console.log("Authentication Done");
    // res.send("Authentication Done");
    next(); 
}

// loading middleware into app
app.use(authentciationMiddleWare);

const validationMiddleWare = function(req, res, next){
    console.log("Validation Done");
    // res.send("Validation Done");
    next();
}

// loading middleware into app
app.use(validationMiddleWare);

app.get('/', (req, res)=> {
    console.log(req.body);
    res.send("hello world");
})


app.listen(port, ()=>{
    console.log(`server started in port no ${port}`);
})