import { z } from 'zod'

const envSchema = z.object({
	EXPO_PUBLIC_SUPABASE_URL: z.string().url({
		message: 'EXPO_PUBLIC_SUPABASE_URL precisa ser uma URL válida',
	}),
	EXPO_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, {
		message: 'EXPO_PUBLIC_SUPABASE_ANON_KEY não pode estar vazio',
	}),
})

export const ENV_VARIABLES = envSchema.parse(process.env)
