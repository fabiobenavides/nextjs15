import { buildFeedbackPath, extractFeedback } from './feedback';

export default function handler(req, res) {

    if (req.method === 'GET') {
        getFeedback(req, res);
    } else if (req.method === 'DELETE') {
        deleteFeedback(req, res);
    } else if (req.method === 'PUT') {
        updateFeedback(req, res);
    }
}

function getFeedback(req, res) {
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    const feedbackItem = data.find(item => item.id === feedbackId);
    res.status(200).json({feedback: feedbackItem});
}

function deleteFeedback(req, res) {
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    const feedbackItem = data.find(item => item.id === feedbackId);
    res.status(200).json({message: 'Feedback deleted successfully', feedback: feedbackItem});
}

function updateFeedback(req, res) {
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    const feedbackItem = data.find(item => item.id === feedbackId);
    res.status(200).json({message: 'Feedback updated successfully', feedback: feedbackItem});
}

