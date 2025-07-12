import React from 'react'

import { FeedbackService } from './FeedbackService'

export const FeedbackContext = React.createContext<FeedbackService>(
	{} as FeedbackService
)

export const FeedbackProvider = FeedbackContext.Provider

export function useFeedbackService(): FeedbackService {
	const context = React.useContext(FeedbackContext)

	if (!context) {
		throw new Error('Feedback Context should be used within a FeedbackProvider')
	}

	return context
}
