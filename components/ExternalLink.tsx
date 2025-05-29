import { type ComponentProps } from 'react'

import { Href, Link } from 'expo-router'

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href & string }

export function ExternalLink({ href, ...rest }: Props) {
	return <Link target="_blank" {...rest} href={href} />
}
