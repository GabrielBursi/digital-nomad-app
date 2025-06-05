import { memo } from 'react'

import { createText } from '@shopify/restyle'

import type { Theme } from '@/types/theme'

const TextMemoized = createText<Theme>()
export const Text = memo(TextMemoized)
