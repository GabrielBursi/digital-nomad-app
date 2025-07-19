export interface StorageService {
	setItem: <TValue = unknown>(key: string, value: TValue) => Promise<void>
	getItem: <TValue = unknown>(key: string) => Promise<TValue | null>
	removeItem: (key: string) => Promise<void>
}
