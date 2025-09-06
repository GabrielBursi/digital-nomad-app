import { AuthUser } from '@supabase/supabase-js'

import { supabaseClient } from './supabaseClient'

const GetUserFromSession = async (): Promise<AuthUser> => {
	const { data, error } = await supabaseClient.auth.getSession()

	if (error || !data.session) {
		throw new Error('invalid session')
	}
	return data.session.user
}

export const SupabaseHelpers = {
	GetUserFromSession,
} as const
