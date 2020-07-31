const express=require('express');
const {connect} =require('mongoose');
const bodyParser=require('body-parser');
const exphbs=require('express-handlebars');
const {PORT,MONGODB_URL}=require("./config");
 
const app=express();
/*======================================connect mongodb database==================================== */
connect( MONGOR_URL,
    {useNewUrlParser:true,useUndefinedTopology:true},(err)=>{
    if (err) throw err;
    console.log('myntra database connection successfully connected');
}
);

/*============================Template engine middleware stars here=============================== */
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

/*=============================Template engine middleware ends here============================ */
/*==================================body parser incoming request stream to convert data starts========== */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}))
/*==================================body parser incoming request stream to convert data ends========== */
/*==========================server static assets======================================================= */
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/node_modules"));
/*===========================server static assets ends ============================================= */

/*===============================================load ROUTES MODULE====================================*/
app.use('/profile/',require('./Routes/profiles/profile'));
app.use("/auth/",require("./Routes/auth/auth"));
app.use("/sports",require('Routes/products/sports'));

app.listen(port,(err)=>{
    if(err) throw err;
    console.log('Myntra sever is runnin on port number'+port);
});