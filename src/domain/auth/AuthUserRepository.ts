import { AuthUser } from './AuthUser'

export type PayloadAuthSignIn = {
	email: string
	password: string
}

export type PayloadAuthSignUp = {
	fullname: string
	email: string
	password: string
}

export interface AuthRepo {
	signIn: (payload: PayloadAuthSignIn) => Promise<AuthUser>
	signOut: () => Promise<void>
	sendResetPasswordEmail: (email: string) => Promise<void>
	signUp: (params: PayloadAuthSignUp) => Promise<void>
}
