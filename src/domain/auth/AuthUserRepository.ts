import { AuthUser } from './AuthUser'

export type PayloadAuthSignIn = {
	email: string
	password: string
}

export interface AuthRepo {
	signIn: (payload: PayloadAuthSignIn) => Promise<AuthUser>
	signOut: () => Promise<void>
}
