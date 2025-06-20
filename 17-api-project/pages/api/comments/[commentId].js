export default function handler(req, res) {

  const commentId = req.query.commentId;
  if (req.method === 'POST') {
    processComment(commentId, req, res);
  } else if (req.method === 'GET') {
    processGetcomment(commentId, req, res);
  } else {
    res.status(404).json({message: 'Method not allowed'});
  }

}

function processComment(commentId, req, res) {
  const { email, name, text } = req.body;
  
  if (!email || !email.includes('@') || !name || !text) {
    res.status(422).json({message: 'Invalid input.'});
    return;
  }
  
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

function processGetcomment(commentId, req, res) {
  const dummyComments = [
    {
      id: 'c1',
      email: 'test@test.com',
      name: 'Test User',
      text: 'This is a dummy comment.'
    },
    {
      id: 'c2',
      email: 'test2@test.com',
      name: 'Test User 2',
      text: 'This is another dummy comment.'
    }
  ];

  res.status(200).json({comments: dummyComments});
}