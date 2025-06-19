import { BottomSheetProps } from '@/components/ui/BottomSheet/BottomSheet.types'
import { City } from '@/types/city'

export type BottomSheetMapProps = BottomSheetProps & {
	location: City['location']
}
