import { memo } from 'react'

import { createBox } from '@shopify/restyle'

import type { Theme } from '@/types/theme'

const BoxMemoized = createBox<Theme>()
export const Box = memo(BoxMemoized)
