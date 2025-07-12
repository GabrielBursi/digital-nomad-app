import { CategoryCode, type Category } from '@/domain/category'

export const categories: Category[] = [
	{
		id: 'star',
		code: CategoryCode.FAVORITE,
		name: 'Destaques',
		description: 'Os preferidos dos viajantes',
	},
	{
		id: 'urban',
		code: CategoryCode.URBAN,
		name: 'Urbano',
		description: 'Explore a vida na cidade',
	},
	{
		id: 'beach',
		code: CategoryCode.BEACH,
		name: 'Praia',
		description: 'Sombra e água fresca',
	},
	{
		id: 'nature',
		code: CategoryCode.NATURE,
		name: 'Natureza',
		description: 'Os melhores destinos para descansar',
	},
	{
		id: 'culture',
		code: CategoryCode.CULTURE,
		name: 'Cultura',
		description: 'Riqueza cultural e tradições',
	},
	{
		id: 'shopping',
		code: CategoryCode.SHOPPING,
		name: 'Compras',
		description: 'Destinos para quem adora fazer compras',
	},
	{
		id: 'history',
		code: CategoryCode.HISTORY,
		name: 'História',
		description: 'Cidades ricas em história e patrimônio',
	},
	{
		id: 'adventure',
		code: CategoryCode.ADVENTURE,
		name: 'Aventura',
		description: 'Os melhores lugares para aventura',
	},
	{
		id: 'luxury',
		code: CategoryCode.LUXURY,
		name: 'Luxo',
		description: 'Experiências de viagem de luxo',
	},
	{
		id: 'gastronomy',
		code: CategoryCode.GASTRONOMY,
		name: 'Gastronomia',
		description: 'Explore a culinária local',
	},
]
