import path from 'path';
import fs from 'fs';

function handler(req, res) {

  if (req.method === 'POST') {
    processFeedback(req, res);
  } else if (req.method === 'GET') {
    getFeedback(req, res);
  } else {
    res.status(404).json({message: 'Method not allowed'});
  }

}

function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function getFeedback(req, res) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  res.status(200).json({feedback: data});
}

function processFeedback(req, res) {
  const email = req.body.email;
    const feedback = req.body.feedback;

    console.log(email, feedback);
    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback
    }

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({message: 'Success!', feedback: newFeedback});
}

export default handler;