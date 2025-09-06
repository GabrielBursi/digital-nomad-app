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

export type PayloadAuthUpdateProfile = {
	fullname: string
	email: string
}

export type PayloadAuthUpdatePassword = {
	currentPassword: string
	newPassword: string
}

export interface AuthRepo {
	signIn: (payload: PayloadAuthSignIn) => Promise<AuthUser>
	signOut: () => Promise<void>
	sendResetPasswordEmail: (email: string) => Promise<void>
	signUp: (params: PayloadAuthSignUp) => Promise<void>
	getUser: () => Promise<AuthUser>
	updateProfile: (params: PayloadAuthUpdateProfile) => Promise<void>
	updatePassword: (params: PayloadAuthUpdatePassword) => Promise<void>
}
