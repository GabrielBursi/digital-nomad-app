import { City } from '@/types/city'

export type CityDetailsInfoProps = Pick<
	City,
	'name' | 'country' | 'description'
>
