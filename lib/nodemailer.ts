import nodemailer from "nodemailer";

// Gmail transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const getContactHTML = (name: string, email: string, message: string) => `
  <h1 style="color: #333;">DEV PORTFOLIO</h1>
  <p>Hey Kiran, You have an enquiry. </p>
  <p> NAME: ${name} </p>
  <p> EMAIL: ${email} </p>
  <p> MESSAGE: ${message} </p>
`;

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const result = await transporter.sendMail({
      from: process.env.GMAIL_USER!,
      to,
      subject,
      html,
    });
    console.log("Email sent successfully:", result.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: (error as Error).message };
  }
};

export const sendContactEmail = async (name: string, email: string, message: string) => {
  const html = getContactHTML(name, email, message);
  return await sendEmail(
    process.env.GMAIL_USER!,
    `Dev Portfolio - New Contact Form Submission from ${name}`,
    html
  );
};
