import { Request, Response, Router } from "express";
import { sendEmail, sendAutoReply } from "../../utils";
const router: Router = Router();

router.post("/api/v1/send-email", async (req: Request, res: Response) => {
  try {
    const { subject, body, from, firstName, lastName, phoneNumber } = req.body;
    const fullName: string = `${firstName} ${lastName}`;
    const html: string = `
    <h3>${from} is saying:</h3> 
    
    ${body}

    <h3>Call ${fullName} at: ${phoneNumber}</h3>

    <h5>Kind Regards</h5>
    <br/>
    ${fullName}
    `;

    // sending an email
    await sendEmail(html, subject, from, fullName);
    // automatic reply

    const autoReplyHTML: string = `
    <h2>${subject}</h2>

    <p>This email is an automatic response for your request to us on your email of the subject <b>"${subject}"</b>. We will respond to your email as soon as possible.</p><p><b>Please do not reply to this email</b></p>
  
    <h5>Kind Regards</h5>
<br/>
    Crispen
    `;
    await sendAutoReply(autoReplyHTML, subject, from);

    return res.status(200).json({
      code: 200,
      message: "The email was sent successfully.",
    });
  } catch (e) {
    return res.status(500).json({
      code: 500,
      message: "Failed to send the email.",
    });
  }
});

export default router;
