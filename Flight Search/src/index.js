const express=require("express");
const {PORT}=require("./config/serverConfig");
const ApiRoutes=require("./routes/index");
const Flight=require("./models/index");
const db=require("./models/index")

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",ApiRoutes);

app.listen(PORT,()=>{
    if(process.env.SYNC_DB=="true"){
        db.sequelize.sync({alter:true});
    }


    console.log("Flight search server is running on port",PORT);
})

