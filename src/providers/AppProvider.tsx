import { type PropsWithChildren } from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AuthProvider } from '@/domain/auth/context'
import { FeedbackProvider, ToastFeedback } from '@/infra/feedback'
import { MemoryRepositories, RepositoryProvider } from '@/infra/repository'
import { AsyncStorageService, StorageProvider } from '@/infra/storage'
import { theme } from '@/theme'

const queryClient = new QueryClient()

export const AppProvider = ({ children }: PropsWithChildren) => {
	return (
		<StorageProvider value={AsyncStorageService}>
			<AuthProvider>
				<FeedbackProvider value={ToastFeedback}>
					<RepositoryProvider value={MemoryRepositories}>
						<QueryClientProvider client={queryClient}>
							<ThemeProvider theme={theme}>{children}</ThemeProvider>
						</QueryClientProvider>
					</RepositoryProvider>
				</FeedbackProvider>
			</AuthProvider>
		</StorageProvider>
	)
}
