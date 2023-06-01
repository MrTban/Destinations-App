'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { IconType } from 'react-icons'

import qs from 'query-string'

interface CategoryBoxProps {
	icon: IconType
	label: string
	description?: string
	selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
	icon: Icon,
	label,
	description,
	selected,
}) => {
	const router = useRouter()
	const params = useSearchParams()

	const handleClick = useCallback(() => {
		let currentQuery = {}

		if (params) {
			currentQuery = qs.parse(params.toString())
		}

		const updatedQuery: any = {
			...currentQuery,
			category: label,
		}

		if (params?.get('category') === label) {
			delete updatedQuery.category
		}

		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updatedQuery,
			},
			{ skipNull: true }
		)

		router.push(url)
	}, [params, label, router])

	return (
		<div
			onClick={handleClick}
			className={`
				flex 
				flex-col 
				items-center 
				justify-center 
				gap-2 
				p-3 
				border-b-2
				hover:text-neutral-900 
				transition
				cursor-pointer
				${selected ? 'border-b-cyan-400' : 'border-transparent'}
				${selected ? 'text-neutral-950' : 'text-neutral-500'}
			`}
		>
			<Icon size={28} className={`${selected ? 'scale-105' : 'scale-100'}`} />
			<div className='text-sm font-semibold'>{label}</div>
		</div>
	)
}

export default CategoryBox
