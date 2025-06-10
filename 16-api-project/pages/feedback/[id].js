import { buildFeedbackPath, extractFeedback } from '../api/feedback';

export default function FeedbackDetailPage(props) {
    const { feedbackItem } = props; 
    return (
        <div>
            <h1>Feedback Detail Page</h1>
            <p>{feedbackItem.feedback}</p>
        </div>
    );
}

export async function getStaticProps(context) {
    const feedbackId = context.params.id;
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    const feedbackItem = data.find(item => item.id === feedbackId);
    return {
        props: { feedbackItem: feedbackItem },
    };
}

export async function getStaticPaths() {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    const paths = data.map(item => ({ params: { id: item.id } }));
    return {
        paths: paths,
        fallback: false,
    };
}