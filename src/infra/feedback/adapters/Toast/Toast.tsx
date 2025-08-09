import RNToast, { type ToastConfig } from 'react-native-toast-message'

import { Box, Text } from '@/components'
import { ThemeColors } from '@/types/theme'

import { Feedback, FeedbackType } from '../../FeedbackService'

const toastColors: Record<
	FeedbackType,
	{ backgroundColor: ThemeColors; textColor: ThemeColors }
> = {
	error: {
		backgroundColor: 'fbErrorBg',
		textColor: 'fbErrorSurface',
	},
	success: {
		backgroundColor: 'fbSuccessBg',
		textColor: 'fbSuccessSurface',
	},
	warning: {
		backgroundColor: 'fbWarningBg',
		textColor: 'fbWarningSurface',
	},
	info: {
		backgroundColor: 'fbInfoBg',
		textColor: 'fbInfoSurface',
	},
}

export const CustomToast = ({ type, description, message }: Feedback) => {
	const { backgroundColor, textColor } = toastColors[`${type ?? 'success'}`]
	return (
		<Box
			backgroundColor={backgroundColor}
			paddingHorizontal="s24"
			paddingVertical="s12"
			borderRadius="default"
		>
			<Text color={textColor} variant="title16">
				{message}
			</Text>
			{description && (
				<Text color={textColor} mt="s4" textAlign="center">
					{description}
				</Text>
			)}
		</Box>
	)
}

const toastConfig: ToastConfig = {
	success: ({ props }) => <CustomToast {...props} />,
	error: ({ props }) => <CustomToast {...props} />,
	warning: ({ props }) => <CustomToast {...props} />,
	info: ({ props }) => <CustomToast {...props} />,
}

export const Toast = () => {
	return (
		<RNToast
			autoHide
			topOffset={80}
			visibilityTime={3000}
			config={toastConfig}
		/>
	)
}
