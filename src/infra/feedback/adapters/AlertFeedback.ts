import { Alert } from 'react-native'

import type { FeedbackService } from '../FeedbackService'

export const AlertFeedback: FeedbackService = {
	send: (feedback) => {
		Alert.alert(feedback.message, feedback.description)
	},
}
