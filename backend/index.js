const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const authRoutes = require('./routes/auth');


const app = express();

//Middlewares
app.use(express.json()); //json formatında görmek için
app.use(cors());
app.use("/api/auth",authRoutes) //Auth routelarını kullanmak için



app.get("/",(req,res)=>{
    res.send("backend api çalışıyor");
});


//Database bağlantısı gerçekleştirme
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("MongoDB connected"))
    .catch((err)=>console.log(err));

//Sunucuyu dinleme
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sunucu şu anda localhost:${PORT} portunda dinleniyor`);

});



