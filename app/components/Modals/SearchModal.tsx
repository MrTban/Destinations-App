'use client'

import qs from 'query-string'
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import useSearchModal from '@/app/hooks/useSearchModal'

import Modal from './Modal'
import CountrySelect, { CountrySelectValue } from '../Inputs/CountrySelect'
import Heading from '../Heading'

const SearchModal = () => {
	const router = useRouter()
	const searchModal = useSearchModal()
	const params = useSearchParams()

	const [location, setLocation] = useState<CountrySelectValue>()

	const Map = useMemo(
		() =>
			dynamic(() => import('../Map'), {
				ssr: false,
			}),
		[location]
	)

	const onSubmit = useCallback(async () => {
		let currentQuery = {}

		if (params) {
			currentQuery = qs.parse(params.toString())
		}

		const updatedQuery: any = {
			...currentQuery,
			locationValue: location?.value,
		}

		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updatedQuery,
			},
			{ skipNull: true }
		)

		searchModal.onClose()

		router.push(url)
	}, [searchModal, location, router, params])

	let bodyContent = (
		<div className='flex flex-col gap-8'>
			<Heading title='Adónde quieres ir?' subtitle='Encuentra el destino perfecto' />
			<CountrySelect
				value={location}
				onChange={(value) => setLocation(value as CountrySelectValue)}
			/>
			<hr />
			<Map center={location?.latlng} />
		</div>
	)

	return (
		<Modal
			isOpen={searchModal.isOpen}
			onClose={searchModal.onClose}
			onSubmit={onSubmit}
			title='Ubicación'
			actionLabel='Buscar'
			body={bodyContent}
		/>
	)
}

export default SearchModal
