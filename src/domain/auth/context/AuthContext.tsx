import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'

import { router } from 'expo-router'

import { useStorageService } from '@/infra/storage'

import { AuthUser } from '../AuthUser'

type AuthState = {
	authUser: AuthUser | null
	isReady: boolean
	saveAuthUser: (authUser: AuthUser) => Promise<void>
	removeAuthUser: () => Promise<void>
}

export const AuthContext = createContext<AuthState | null>(null)

const AUTH_KEY = 'AUTH_KEY'

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const { getItem, removeItem, setItem } = useStorageService()

	const [authUser, setAuthUser] = useState<AuthUser | null>(null)
	const [isReady, setIsReady] = useState<boolean>(false)

	const saveAuthUser = useCallback(
		async (user: AuthUser) => {
			await setItem<AuthUser>(AUTH_KEY, user)
			setAuthUser(user)
			router.replace('/')
		},
		[setItem]
	)

	const removeAuthUser = useCallback(async () => {
		await removeItem(AUTH_KEY)
		setAuthUser(null)
	}, [removeItem])

	const loadAuthUser = useCallback(async () => {
		try {
			const user = await getItem<AuthUser>(AUTH_KEY)
			if (user) {
				setAuthUser(user)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsReady(true)
		}
	}, [getItem])

	useEffect(() => {
		void loadAuthUser()
	}, [loadAuthUser])

	return (
		<AuthContext.Provider
			value={{ authUser, isReady, saveAuthUser, removeAuthUser }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('Auth Context should be used within an AuthProvider')
	}
	return context
}
