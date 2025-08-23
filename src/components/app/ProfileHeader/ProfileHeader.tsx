import React, { memo } from 'react'

import { router } from 'expo-router'

import { Box, Button, LineItem, Text } from '@/components/ui'

import type { ProfileHeaderProps } from './ProfileHeader.types'

const ProfileHeaderMemoized = ({ authUser }: Readonly<ProfileHeaderProps>) => {
	return (
		<Box>
			<Text variant="title16" alignSelf="center" mb="s40">
				Perfil
			</Text>

			<Text variant="title16" mb="s16">
				Informações da Conta.
			</Text>

			<Box rowGap="s4">
				<LineItem label="Nome" value={authUser.fullname} />
				<LineItem label="E-mail" value={authUser.email} />
				<LineItem label="Membro desde" value={authUser.createdAt} />
			</Box>

			<Box flexDirection="row" columnGap="s16" mt="s16">
				<Box flex={1}>
					<Button
						title="Editar perfil"
						variant="secondary"
						onPress={() =>
							router.navigate({
								pathname: '/update-profile',
								params: {
									fullname: authUser.fullname,
									email: authUser.email,
								},
							})
						}
					/>
				</Box>
				<Box flex={1}>
					<Button
						title="Alterar senha"
						variant="secondary"
						onPress={() => router.navigate('/update-password')}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export const ProfileHeader = memo(ProfileHeaderMemoized)
