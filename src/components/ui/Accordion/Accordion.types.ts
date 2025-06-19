import { SharedValue } from 'react-native-reanimated'

export type AccordionProps = {
	title: string
	description: string
}

export type AccordionHeaderProps = {
	title: string
	progress: SharedValue<number>
}

export type AccordionBodyProps = {
	description: string
	progress: SharedValue<number>
}
