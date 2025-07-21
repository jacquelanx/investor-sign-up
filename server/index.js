import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import FormSubmission from './models/FormSubmission.js';

dotenv.config();

//Middleware
const app = express();
app.use(cors());
app.use(express.json());

//DB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

//Email stuff
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/submit', async (req, res) => {
    const{ fullName, email, phone } = req.body; //keys must match frontend exactly

    if (!fullName || !email || !phone) {
        res.status(400).json({error: 'Missing required fields!'});
    }

    try {
        const submission = await FormSubmission.create({ fullName, email, phone });
        console.log('💾 Submission saved to database', submission);

        //Send notif email
        const notifyMsg = {
            to: process.env.NOTIFY_EMAIL, //internal team email
            from: process.env.SENDER_EMAIL, 
            subject: 'New Investor Form Submission',
            text: `Name: ${fullName}\nEmail: ${email}\nPhone:${phone}`,
            html: `
                <h2>New Submission</h2>
                <p><strong>Name: </strong>${fullName}</p>
                <p><strong>Email: </strong>${email}</p>
                <p><strong>Phone: </strong>${phone}</p>
            `,
        };

        const confirmationMsg = {
            to: email, //user email
            from: process.env.SENDER_EMAIL,
            subject: 'Thank you for your submission!',
            text: `Hi ${fullName},\n\nThank you for submitting your information. We will be in touch soon!`,
            html: `
                <p>Hi ${fullName},</p>
                <p>Thank you for submitting your information. We will be in touch soon!</p>
            `,
        };

        await sgMail.send(notifyMsg);
        await sgMail.send(confirmationMsg);
        console.log('📧 Both emails sent successfully');
        res.status(200).json({message: 'Submission saved and emails sent'});
    }
    catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
})