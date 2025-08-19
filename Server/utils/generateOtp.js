export const  generateOTP = (expiryMinutes = 5) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    const expiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);
    const receivedAt = new Date(Date.now()); // expiry in ms
    return { otp, expiresAt , receivedAt };
  }

  console.log(generateOTP(1));