import nodemailer from "nodemailer";
var inLineCss = require("nodemailer-juice");

export const sendEmail = async (
  html: string,
  subject: string,
  from: string,
  fullName: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "crispendev@gmail.com",
      pass: process.env.SENDER_PASSWORD as string,
      credentials: {
        user: "crispendev@gmail.com",
        pass: process.env.SENDER_PASSWORD as string,
      },
    },
    requireTLS: true,
  });
  transporter.use("compile", inLineCss());
  await transporter.sendMail({
    from: `"${fullName}" <${from}>`,
    to: "crispengari@gmail.com",
    subject,
    html: html,
    replyTo: from,
  });
};

export const sendAutoReply = async (
  html: string,
  subject: string,
  to: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "crispendev@gmail.com",
      pass: process.env.SENDER_PASSWORD as string,
      credentials: {
        user: "crispendev@gmail.com",
        pass: process.env.SENDER_PASSWORD as string,
      },
    },
    requireTLS: true,
  });
  transporter.use("compile", inLineCss());
  await transporter.sendMail({
    from: `"Automatic Reply: Crispen Bot." <crispengari@gmail.com>`,
    to: to,
    subject,
    html: html,
    replyTo: "crispen-no-reply@gmail.com",
  });
};
