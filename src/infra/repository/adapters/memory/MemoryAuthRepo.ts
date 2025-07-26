import { authUsers } from '@/data'
import type { AuthRepo, AuthUser, PayloadAuthSignIn } from '@/domain/auth'

export class MemoryAuthRepo implements AuthRepo {
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
