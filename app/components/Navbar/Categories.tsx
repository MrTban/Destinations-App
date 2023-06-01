'use client'

import Container from '../Container'
import CategoryBox from '../CategoryBox'
import { categories } from './categorias'
import { usePathname, useSearchParams } from 'next/navigation'

const Categories = () => {
	const params = useSearchParams()
	const category = params?.get('category')
	const pathname = usePathname()

	const isMainPage = pathname === '/'

	if (!isMainPage) {
		return null
	}

	return (
		<Container>
			<div className='flex flex-row items-center justify-between pt-4 overflow-x-auto'>
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						description={item.description}
						selected={category === item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	)
}

export default Categories
