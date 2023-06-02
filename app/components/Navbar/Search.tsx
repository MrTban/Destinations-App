'use client'

import { BiSearch } from 'react-icons/bi'

import useSearchModal from '@/app/hooks/useSearchModal'

const Search = () => {
	const searchModal = useSearchModal()

	return (
		<div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
			<div className='flex flex-row items-center justify-between'>
				<div className='text-sm font-semibold px-6'>COOL</div>
				<div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
					Destinos
				</div>
				<div className='text-sm pl-6 pr-2 text-gray-500 flex flex-row items-center gap-3'>
					<div className='hidden sm:block'>Busqueda</div>
					<div className='p-2 rounded-full text-white bg-cyan-400'>
						<BiSearch size={14} color='black' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
