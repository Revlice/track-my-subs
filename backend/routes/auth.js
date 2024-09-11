const express = require('express');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const router = express.Router();

// Kullanıcı Kayıt Olma
router.post("/signup", async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Şifreler eşleşmiyor" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Kullanıcı zaten bulunuyor" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });

    } catch (err) {
        res.status(500).json({ message: "Kullanıcı oluşturmada hata var" });
    }
});

// Kullanıcı Giriş Yapma
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Hatalı e-posta veya şifre" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Hatalı e-posta veya şifre" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });

    } catch (err) {
        res.status(500).json({ message: "Giriş yapmada hata var" });
    }
});

// Şifremi Unuttum - Doğrulama kodu gönderme
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        }

        // Doğrulama kodu oluştur
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetToken = resetToken;
        user.resetTokenExpires = Date.now() + 3600000; // 1 saat geçerli
        await user.save();

        // Nodemailer ile e-posta gönderme
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Şifre Sıfırlama',
            text: `Şifrenizi sıfırlamak için bu kodu kullanın: ${resetToken}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Şifre sıfırlama e-postası gönderildi.' });
        } catch (error) {
            console.error('E-posta gönderme hatası:', error);
            res.status(500).json({ message: 'E-posta gönderilemedi.' });
        }

    } catch (err) {
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
});

// Şifre sıfırlama
router.post('/reset-password', async (req, res) => {
    const { email, token, newPassword } = req.body;

    try {
        const user = await User.findOne({
            email,
            resetToken: token,
            resetTokenExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Geçersiz token veya e-posta.' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetToken = null; // Token'i sıfırla
        user.resetTokenExpires = null; // Token süresini sıfırla
        await user.save();

        res.status(200).json({ message: 'Şifre başarıyla sıfırlandı.' });

    } catch (err) {
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
});

module.exports = router;
