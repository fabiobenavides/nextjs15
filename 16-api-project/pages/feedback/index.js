import { buildFeedbackPath, extractFeedback } from '../api/feedback';
import Link from 'next/link';
import { useState } from 'react';
 
export default function FeedbackPage(props) {
  const { feedbackItems } = props;
  const [feedback, setFeedback] = useState();

  function showFeedback(id) {
    fetch(`/api/${id}`)
      .then(response => response.json())
      .then(data => setFeedback(data.feedback));
  }
  
  return (
    <div>
        <h1>Feedback Page</h1>
        {feedback && <p>{feedback.email}</p>}
        <ul>
            {feedbackItems.map(item => (
                <li key={item.id}>
                    {item.feedback}
                    <Link href={`/feedback/${item.id}`}>View Feedback</Link>
                    <button onClick={() => showFeedback(item.id)}>Show Feedback</button>
                    <button onClick={() => updateFeedback(item.id)}>Update</button>
                    <button onClick={() => deleteFeedback(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: { feedbackItems: data },
  };
}
