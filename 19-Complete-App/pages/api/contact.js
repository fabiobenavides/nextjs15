
export default function handler(req, res) {
    if (req.method === 'POST') {
        sendContactData(req, res);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function sendContactData(req, res) {
    const { email, name, message } = req.body;

    if (!email || !name || !message
        || !email.includes('@') || name.trim() === '' || message.trim() === ''
    ) {
        return res.status(422).json({ message: 'Invalid input' });
    }

    // Here you would typically handle the form submission, e.g., save to a database or send an email
    console.log('Contact Form Submission:', { email, name, message });

    res.status(201).json({ message: 'Message sent successfully!' });
}
