const twilio = require('twilio');
const registerStyle = require('../models/registerStyle');
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = new twilio(accountSid, authToken);

const bookAppointment = async (req, res) => {
  try {
    const { username, Appointment } = req.body;

    const user = await registerStyle.findOne({username});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userPhoneNumber = user.phonenumber; 
    // const userWhatsAppNumber = `whatsapp:${userPhoneNumber}`; 


    const messageBody =` Hi ${user.username}, your appointment confirmed.`;

await client.messages.create({
    body: messageBody,
    from: '+17627755994', 
    to: userPhoneNumber,
  });


//   await client.messages.create({
//     body: messageBody,
//     from: '+12764098444', // Replace with your Twilio WhatsApp number
//     to: '+918328111975',
//   });


  return res.status(200).json({ message: 'Appointment booked and notifications sent' });
} catch (error) {
  console.error('Error booking appointment or sending messages:', error);
  return res.status(500).json({ message: 'Error booking appointment', error: error.message });
}
};
module.exports={bookAppointment};
