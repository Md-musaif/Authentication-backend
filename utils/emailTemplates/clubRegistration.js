module.exports = (name, email, password) => {
  return {
    subject: `${process.env.APP_NAME} - Club Registration Details`,
    html: `<!DOCTYPE html>
    <html>
    <head>
        <title>Club Registration Confirmation</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
    
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
            <div style="padding: 30px;">
                <h1 style="font-size: 24px; color: #333; margin-bottom: 20px;">Club Registration Confirmation</h1>
                <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Dear ${name},</p>
                <p style="font-size: 16px; color: #333; margin-bottom: 20px;">We are pleased to inform you that your club registration has been successfully completed. As the administrator of the club, you now have access to your club dashboard, where you can manage your club.</p>
                <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Please find below the login credentials you will need to access your club dashboard:</p>
                <ul style="font-size: 16px; color: #333; margin-bottom: 20px;">
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Password:</strong> ${password}</li>
                </ul>
                <p style="font-size: 16px; color: #333;">Should you have any questions or require further assistance, please do not hesitate to contact us at ${process.env.COMPANY_MAIL}. We are committed to providing you with the highest level of service and support.</p>
                <p style="font-size: 16px; color: #333; margin-top: 30px;">Thank you for choosing to register your club with us. We look forward to serving you and helping you achieve your goals.</p>
                <p style="font-size: 16px; color: #333; margin-top: 30px;">Best regards,</p>
                <p style="font-size: 16px; color: #333;">${process.env.APP_NAME}</p>
            </div>
        </div>
    
    </body>
    </html>`,
  };
};
