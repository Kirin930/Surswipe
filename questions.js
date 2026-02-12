// ========================================
// SURWIPE - Questions Configuration
// ========================================

const QUESTIONS = [
    {
        id: "q1",
        question: "Sei interessato in Tevel?"
    },
    {
        id: "q2",
        question: "Sei interessato per un tirocinio formativo?"
    },
    {
        id: "q3",
        question: "Sei interessato pre lo sviluppo della tesi in azienda?"
    },
    {
        id: "q4",
        question: "Sei interessato a lavorare in Tevel?"
    },
    {
        id: "q5",
        question: "Ti farebbe piacere essere ricontattato?"
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
