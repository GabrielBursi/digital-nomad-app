import { BoxProps } from '@/components/ui/Box/Box.types'
import type { CityPreview } from '@/domain/city'

export type CityCardProps = { cityPreview: CityPreview } & Pick<
	BoxProps,
	'style'
>
