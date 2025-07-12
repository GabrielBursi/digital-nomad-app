import { authUsers } from '@/data'
import type { AuthRepo, AuthUser, PayloadAuthSignIn } from '@/domain/auth'

export class MemoryAuthRepo implements AuthRepo {
	async signIn({ email }: PayloadAuthSignIn): Promise<AuthUser | null> {
		await Promise.resolve()
		return authUsers.find((user) => user.email === email) ?? null
	}

	async signOut(): Promise<void> {
		return await Promise.resolve()
	}
}
