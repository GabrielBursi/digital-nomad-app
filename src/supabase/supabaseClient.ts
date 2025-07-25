import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

import { ENV_VARIABLES } from '@/env'
import { Database as SupabaseDatabase } from '@/types/supabase'
import 'react-native-url-polyfill/auto'

export const supabaseClient = createClient<SupabaseDatabase>(
	ENV_VARIABLES.EXPO_PUBLIC_SUPABASE_URL,
	ENV_VARIABLES.EXPO_PUBLIC_SUPABASE_ANON_KEY,
	{
		auth: {
			storage: AsyncStorage,
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: false,
		},
	}
)
