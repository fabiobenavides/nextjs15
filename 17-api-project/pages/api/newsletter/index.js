export default function handler(req, res) {

  if (req.method === 'POST') {
    processNewsletter(req, res);
  } else {
    res.status(404).json({message: 'Method not allowed'});
  }

}


function processNewsletter(req, res) {
  const email = req.body.email;

  if (!email || !email.includes('@')) {
    res.status(422).json({message: 'Invalid email address!'});
    return;
  }

  console.log(email);
  const newNewsletter = {
    id: new Date().toISOString(),
    email
  }

  /*const filePath = buildNewsletterPath();
  const data = extractNewsletter(filePath);
  data.push(newNewsletter);
  fs.writeFileSync(filePath, JSON.stringify(data));*/

  res.status(201).json({message: 'Success!', newsletter: newNewsletter});
}