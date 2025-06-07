import { useEffect, useState } from 'react'

export const useDebounce = <TValue,>(value: TValue, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState<TValue>(value)

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(timer)
		}
	}, [value, delay])

	return debouncedValue
}
