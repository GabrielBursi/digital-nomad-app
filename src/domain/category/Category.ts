export enum CategoryCode {
	ADVENTURE = 'ADVENTURE',
	BEACH = 'BEACH',
	CULTURE = 'CULTURE',
	GASTRONOMY = 'GASTRONOMY',
	HISTORY = 'HISTORY',
	LUXURY = 'LUXURY',
	NATURE = 'NATURE',
	SHOPPING = 'SHOPPING',
	URBAN = 'URBAN',
	FAVORITE = 'FAVORITE',
}

export type Category = {
	id: string
	name: string
	description: string | null
	code: CategoryCode
}
