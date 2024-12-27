import nodemailer from 'nodemailer';
// import { render } from '@react-email/render';
// import ContactEmailTemplate from '@/components/ContactEmailTemplate';

export async function POST(req) {
  console.log('req', req)
  try {
    const { email, name, phone, message } = await req.json(); // Parsing JSON body

    // Create a transporter using SMTP
    // const emailHtml = render(
    //   <ContactEmailTemplate
    //     email={to}
    //     subject={subject}
    //     message={message}
    //   />
    // );
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL (true for port 465, false for other ports)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.EMAIL_USER,                       // List of receivers
      subject: 'Message from Jaigaon Public School Website',             // Subject line
      html: `
      <h1>from: ${name},</h1>
      <p>email: ${email}</p>
      <p>contact number: ${phone}</p>
      <p>message: ${message},</p>
    `,
    });

    let client = await transporter.sendMail({
      from: `"Jaigaon Public School" <${process.env.EMAIL_USER}>`, // Sender address
      to: email,                       // List of receivers
      subject: 'Thank You for Reaching Out!', // Subject line
      html: `
        <p>Dear ${name},</p>
        <p>we will get in touch with you soon </p>
      `,
    });

    console.log("Message sent: %s", info.messageId);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
