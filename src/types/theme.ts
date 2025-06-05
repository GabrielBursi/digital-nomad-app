import { theme } from '@/theme'

export type Theme = typeof theme
type Colors = Theme['colors']
export type ThemeColors = keyof Colors
export type ThemeColorValues = Colors[ThemeColors]
