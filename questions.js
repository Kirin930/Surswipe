// ========================================
// SURWIPE - Questions Configuration
// ========================================

const QUESTIONS = [
    {
        id: "q1",
        question: "Are you interested in Tevel?"
    },
    {
        id: "q2",
        question: "Are you interested in an internship?"
    },
    {
        id: "q3",
        question: "Are you interested in developing your thesis in company?"
    },
    {
        id: "q4",
        question: "Are you interested in working at Tevel?"
    },
    {
        id: "q5",
        question: "Would you like to be contacted by us?"
    }
];

// Webhook configuration
const WEBHOOK_CONFIG = {
    // Replace this URL with your actual webhook endpoint
    url: 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzMTA0MzY1MjY4NTUzNjUxMzMi_pc',
    timeout: 10000, // 10 seconds
    maxRetries: 2
};

// reCAPTCHA configuration
const RECAPTCHA_CONFIG = {
    // Replace with your actual reCAPTCHA site key
    siteKey: '6LdJOWksAAAAAG1kJa2be9G8S847R1TBARxlERl_', // This is Google's test key
};
