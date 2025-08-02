import type {
	AuthRepo,
	AuthUser,
	PayloadAuthSignIn,
	PayloadAuthSignUp,
} from '@/domain/auth'
import { ENV_VARIABLES } from '@/env'

import { SupabaseAdapters } from './supabaseAdapters'
import { supabaseClient } from './supabaseClient'

const { EXPO_PUBLIC_WEB_URL } = ENV_VARIABLES

export class SupabaseAuthRepo implements AuthRepo {
	signIn = async (payload: PayloadAuthSignIn): Promise<AuthUser> => {
		const { data, error } =
			await supabaseClient.auth.signInWithPassword(payload)
		if (error) {
			throw new Error('user not found')
		}
		return SupabaseAdapters.ToAuthUser(data.user)
	}

	signUp = async (params: PayloadAuthSignUp): Promise<void> => {
		const { error } = await supabaseClient.auth.signUp({
			email: params.email,
			password: params.password,
			options: { data: { fullname: params.fullname } },
		})
		if (error) {
			throw new Error('erro on register user')
		}
	}

	signOut = async (): Promise<void> => {
		await supabaseClient.auth.signOut()
	}
	sendResetPasswordEmail = async (email: string): Promise<void> => {
		await supabaseClient.auth.resetPasswordForEmail(email, {
			redirectTo: `${EXPO_PUBLIC_WEB_URL}/reset-password`,
		})
	}
}
