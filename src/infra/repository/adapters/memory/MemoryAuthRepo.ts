import { authUsers } from '@/data'
import { AuthRepo, AuthUser } from '@/domain/auth'

export class MemoryAuthRepo implements AuthRepo {
	async signIn(email: string, password: string): Promise<AuthUser | null> {
		await Promise.resolve(password)
		return authUsers.find((user) => user.email === email) ?? null
	}

	async signOut(): Promise<void> {
		return await Promise.resolve()
	}
}
