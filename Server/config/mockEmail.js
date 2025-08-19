export const sendEmail = async ({ to, subject, text, html }) => {
    // Just log the email info instead of sending it
    console.log("📧 MOCK EMAIL SENT");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Text:", text);
    console.log("HTML:", html);
    // You can return a fake response to mimic nodemailer
    return { success: true, message: "Mock email sent successfully" };
  };