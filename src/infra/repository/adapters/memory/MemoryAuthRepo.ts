import { authUsers } from '@/data'
import type {
	AuthRepo,
	AuthUser,
	PayloadAuthSignIn,
	PayloadAuthSignUp,
} from '@/domain/auth'

export class MemoryAuthRepo implements AuthRepo {
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
