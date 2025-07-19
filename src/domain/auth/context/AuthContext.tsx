import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

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
	const [authUser, setAuthUser] = useState<AuthUser | null>(null)
	const [isReady, setIsReady] = useState<boolean>(false)

	const saveAuthUser = useCallback(async (user: AuthUser) => {
		await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(user))
		setAuthUser(user)
		router.replace('/')
	}, [])

	const removeAuthUser = useCallback(async () => {
		await AsyncStorage.removeItem(AUTH_KEY)
		setAuthUser(null)
	}, [])

	const loadAuthUser = useCallback(async () => {
		try {
			const user = await AsyncStorage.getItem(AUTH_KEY)
			if (user) {
				setAuthUser(JSON.parse(user) as AuthUser)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsReady(true)
		}
	}, [])

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
