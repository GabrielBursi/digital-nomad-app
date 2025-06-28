import { ImageSourcePropType } from 'react-native'

export const useImageSource = (
	imageSource: number | string
	// eslint-disable-next-line sonarjs/function-return-type
): ImageSourcePropType => {
	return typeof imageSource === 'number' ? imageSource : { uri: imageSource }
}
