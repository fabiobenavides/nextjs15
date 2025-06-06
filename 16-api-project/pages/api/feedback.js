function handler(req, res) {

    res.status(200).json({message: 'Hello World'});

    
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedback = req.body.feedback;

    console.log(email, feedback);
  }
}

export default handler;