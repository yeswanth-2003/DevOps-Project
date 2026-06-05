const moment = require('moment');
const Appointment = require('../models/bookingstyle');
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;   
const client = twilio(accountSid, authToken);
const twilioPhoneNumber = '+12764098444'; 
const twilioWhatsappNumber = 'whatsapp:+14155238886';


const createBooking = async (req, res) => {
    try {
        const { name, number, email, dob } = req.body;

        // for generating random 4-digit OTP
        const otp = Math.floor(1000 + Math.random() * 9999);

        const Booking = new Appointment({
            name,
            number,
            email,
            dob,
            whatsappNumber:number,
            otp
        });

        await Booking.save();

        // OTP via SMS
        await client.messages.create({
            body: `Dear ${name}, your OTP for appointment booking is: ${otp}.`,
            from: twilioPhoneNumber,
            to: '+916301655507', // User's phone number for SMS
        });

        // OTP via WhatsApp
        await client.messages.create({
            body: `Dear ${name}, your OTP for appointment booking is: ${otp}.`,
            from: 'whatsapp:+14155238886', // Twilio WhatsApp sandbox number
            to: 'whatsapp:+916301655507', // User's WhatsApp number
        });

        res.status(201).json({
            message: 'Appointment booked successfully. OTP sent to your phone and WhatsApp.',
            Booking,
        });
    } catch (error) {
        console.error('Booking Error:', error);
        res.status(400).json({ message: 'Error booking appointment', error: error.message });
    }
};

module.exports = { createBooking };
