import { LinkProps } from 'expo-router'

export type TextLinkProps = {
	text: string
	ctaText: string
	href?: LinkProps['href']
	goBackOnPress?: boolean
}
