// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

interface SenderOptions {
  name: string,
  email: string,
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const senderOptions: SenderOptions = { ...JSON.parse(req.body) };

  const transporter = nodemailer.createTransport({
    service: process.env.MAILER_SERVICE, 
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.MAILER_USER,
    to: process.env.MY_MAIL,
    subject: senderOptions.name,
    html: `
      <span>${senderOptions.name} - ${senderOptions.email}</span>
      <br>
      <hr>
      <p>${senderOptions.message}</p>
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).json({message: error.message})
      console.log(error);
    } else {
      res.status(200).json({
        message: 'Your mail has been sent successfully.'
      })
    }
  });
}
