import RNAsyncStorage from '@react-native-async-storage/async-storage'

import { StorageService } from '../StorageService'

export const AsyncStorageService: StorageService = {
	getItem: async <TValue = unknown>(key: string): Promise<TValue | null> => {
		const item = await RNAsyncStorage.getItem(key)
		if (item) {
			return JSON.parse(item) as TValue
		}
		return null
	},
	setItem: async <TValue = unknown>(
		key: string,
		value: TValue
	): Promise<void> => {
		await RNAsyncStorage.setItem(key, JSON.stringify(value))
	},
	removeItem: async (key: string): Promise<void> => {
		await RNAsyncStorage.removeItem(key)
	},
}
