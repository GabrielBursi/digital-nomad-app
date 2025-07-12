import { City } from '@/domain/city'

export type CityDetailsInfoProps = Pick<
	City,
	'name' | 'country' | 'description'
>
