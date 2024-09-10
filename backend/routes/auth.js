const express = require('express');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');

const router = express.Router();

//Kullanıcı Kayıt Olma
router.post("/signup",async (req,res)=>{
    const {email,password,confirmPassword} = req.body;
    if(password !== confirmPassword){
        return res.status(400).json({message:"Şifreler eşleşmiyor"});
    }

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Kullanıcı zaten bulunuyor"});
        }

        const newUser = new User({email,password});
        await newUser.save();

        const token = jwt.sign({userId:newUser._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(201).json({token});

    }catch(err){
        res.status(500).json({message:"Kullanıcı oluşturmada hata var"});
    }
});


//Kullanıcı Giriş Yapma
router.post("/login",async (req,res)=>{
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Hatalı e-posta veya şifre"});

        }

        const isMatch = await bcrypt.compare(password,user.password);
        console.log("Şifre eşleşmesi durumu:", isMatch);
        console.log("Girilen şifre:", password);
        console.log("Veritabanındaki hashlenmiş şifre:", user.password);

        if(!isMatch){
            return res.status(400).json({message:"Hatalı e-posta veya şifre"});

        }
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn: '1h'});
        res.json({token})
    }catch(err){
        res.status(500).json({message:"Giriş yapmada hata var"});
    }


})



module.exports = router;

