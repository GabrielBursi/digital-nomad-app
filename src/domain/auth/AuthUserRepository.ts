import { AuthUser } from './AuthUser'

export interface AuthRepo {
	signIn: (email: string, password: string) => Promise<AuthUser | null>
	signOut: () => Promise<void>
}
