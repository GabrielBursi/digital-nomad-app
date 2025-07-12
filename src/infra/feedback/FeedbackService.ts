export type FeedbackType = 'success' | 'error'

type Feedback = {
	type: 'success' | 'error'
	message: string
	description?: string
}

export interface FeedbackService {
	send: (feedback: Feedback) => void
}
