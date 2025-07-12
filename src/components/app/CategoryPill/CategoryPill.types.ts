import type { PillProps } from '@/components/ui/Pill/Pill.types'
import type { Category } from '@/domain/category'

export type CategoryPillProps = {
	category: Category
} & Pick<PillProps, 'active' | 'onPress'>
