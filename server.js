const express=require('express');
const {connect} =require('mongoose');
const bodyParser=require('body-parser');
const exphbs=require('express-handlebars');
 
const app=express();
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
app.use(express.static9__dirname+"/node_modules");
/*===========================server static assets ends ============================================= */


let port=4000;
app.listen(port,(err)=>{
    if(err) throw err;
    console.log('Myntra sever is runnin on port number'+port);
});