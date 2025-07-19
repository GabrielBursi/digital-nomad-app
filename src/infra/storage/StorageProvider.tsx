import React from 'react'

import { StorageService } from './StorageService'

export const StorageContext = React.createContext<StorageService>(
	{} as StorageService
)

export const StorageProvider = StorageContext.Provider

export function useStorageService(): StorageService {
	const context = React.useContext(StorageContext)

	if (!context) {
		throw new Error('Storage Context should be used within a StorageProvider')
	}

	return context
}
