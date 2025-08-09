export type FeedbackType = 'success' | 'error' | 'warning' | 'info'

export type Feedback = {
	type: FeedbackType
	message: string
	description?: string
}

export interface FeedbackService {
	send: (feedback: Feedback) => void
}
