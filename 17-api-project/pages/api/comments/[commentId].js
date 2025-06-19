export default function handler(req, res) {

  if (req.method === 'POST') {
    processComment(req, res);
  } else {
    res.status(404).json({message: 'Method not allowed'});
  }

}

export function processComment(req, res) {
  const { email, name, text } = req.body;
  const commentId = req.query.commentId;

  console.log(commentId, email, name, text);
  const newComment = {
    id: new Date().toISOString(),
    email,
    name,
    text
  };

  /*const filePath = buildCommentsPath();
  const data = extractComments(filePath);
  data.push(newComment);
  fs.writeFileSync(filePath, JSON.stringify(data));*/

  res.status(201).json({message: 'Success!', comment: newComment});
}