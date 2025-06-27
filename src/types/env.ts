import { ENV_VARIABLES } from '@/env'

export type Environment = typeof ENV_VARIABLES
export type EnvironmentVariablesKeys = keyof Environment
