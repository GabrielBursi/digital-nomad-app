import { authUsers } from '@/data'
import type {
	AuthRepo,
	AuthUser,
	PayloadAuthSignIn,
	PayloadAuthSignUp,
} from '@/domain/auth'

export class MemoryAuthRepo implements AuthRepo {
	user_: AuthUser

	constructor() {
		if (!authUsers[0]) throw new Error('User does not exists')
		this.user_ = authUsers[0]
	}

	get user(): AuthUser {
		return this.user_
	}

	set user(user: AuthUser) {
		this.user_ = user
	}

	async updateProfile() {
		await Promise.resolve()
		if (!authUsers[1]) throw new Error('User does not exists')
		this.user_ = authUsers[1]
	}

	async getUser(): Promise<AuthUser> {
		await Promise.resolve()
		return this.user_
	}

	async signUp(params: PayloadAuthSignUp): Promise<void> {
		await Promise.resolve()
		const userAlreadyExists = authUsers.find(
			(user) => user.email === params.email
		)
		if (userAlreadyExists) {
			throw new Error('user already exists')
		}
	}

	async sendResetPasswordEmail(): Promise<void> {
		return Promise.resolve()
	}

	async signIn({ email }: PayloadAuthSignIn): Promise<AuthUser> {
		await Promise.resolve()
		const user = authUsers.find((user) => user.email === email)
		if (!user) throw new Error('User not found.')
		return user
	}

	async signOut(): Promise<void> {
		return await Promise.resolve()
	}
}
