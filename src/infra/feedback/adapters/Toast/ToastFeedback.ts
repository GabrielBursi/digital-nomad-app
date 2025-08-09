import Toast from 'react-native-toast-message'

import { FeedbackService } from '../../FeedbackService'

export const ToastFeedback: FeedbackService = {
	send: (feedback) => {
		Toast.show({ props: feedback })
	},
}
