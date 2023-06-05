'use client'

import { useMemo } from 'react'
import { BiWorld } from 'react-icons/bi'
import { useSearchParams } from 'next/navigation'

import useSearchModal from '@/app/hooks/useSearchModal'
import useCountries from '@/app/hooks/useCountries'

const Search = () => {
	const searchModal = useSearchModal()
	const params = useSearchParams()
	const { getByValue } = useCountries()

	const locationValue = params?.get('locationValue')

	const locationLabel = useMemo(() => {
		if (locationValue) {
			return getByValue(locationValue as string)?.label
		}

		return 'Ubicación'
	}, [getByValue, locationValue])

	return (
		<div
			onClick={searchModal.onOpen}
			className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'
		>
			<div className='flex flex-row items-center justify-between'>
				<div className='text-sm font-semibold px-6'>MrTban</div>
				<div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
					Destino
				</div>
				<div className='text-sm pl-6 pr-2 text-gray-500 flex flex-row items-center gap-3'>
					<div className='hidden sm:block'>{locationLabel}</div>
					<div className='p-1 rounded-full text-white bg-cyan-400'>
						<BiWorld size={18} color='black' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
