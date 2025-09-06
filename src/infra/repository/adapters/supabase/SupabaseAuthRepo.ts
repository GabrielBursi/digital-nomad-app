import type {
	AuthRepo,
	AuthUser,
	PayloadAuthSignIn,
	PayloadAuthSignUp,
	PayloadAuthUpdatePassword,
	PayloadAuthUpdateProfile,
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

	signUp = async (payload: PayloadAuthSignUp): Promise<void> => {
		const { error } = await supabaseClient.auth.signUp({
			email: payload.email,
			password: payload.password,
			options: { data: { fullname: payload.fullname } },
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

	getUser = async (): Promise<AuthUser> => {
		const { data, error } = await supabaseClient.auth.getUser()
		if (error) {
			throw new Error('error get User')
		}

		return SupabaseAdapters.ToAuthUser(data.user)
	}

	updateProfile = async (payload: PayloadAuthUpdateProfile): Promise<void> => {
		const { error } = await supabaseClient.auth.updateUser({
			email: payload.email,
			data: { fullname: payload.fullname },
		})
		if (error) {
			throw new Error('error updating user')
		}
	}

	updatePassword = async (
		payload: PayloadAuthUpdatePassword
	): Promise<void> => {
		const authUser = await this.getUser()
		await this.signIn({
			email: authUser.email,
			password: payload.currentPassword,
		})

		const { error } = await supabaseClient.auth.updateUser({
			password: payload.newPassword,
		})
		if (error) {
			throw new Error('error updating password')
		}
	}
}
