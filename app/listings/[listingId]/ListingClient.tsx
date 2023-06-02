'use client'

import { SafeListing, SafeUser } from '@/app/types'

import dynamic from 'next/dynamic'

import { useMemo } from 'react'
import { categories } from '@/app/components/Navbar/categorias'

import Container from '@/app/components/Container'
import ListingHead from '@/app/components/Listings/ListingHead'
import ListingInfo from '@/app/components/Listings/ListingInfo'
import useCountries from '@/app/hooks/useCountries'

const Map = dynamic(() => import('@/app/components/Map'), {
	ssr: false,
})
interface ListingClientProps {
	listing: SafeListing & {
		user: SafeUser
	}
	currentUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({ listing, currentUser }) => {
	const { getByValue } = useCountries()
	const coordinates = getByValue(listing.locationValue)?.latlng

	const category = useMemo(() => {
		return categories.find((item) => item.label === listing.category)
	}, [listing.category])
	return (
		<Container>
			<div className='max-w-screen-lg mx-auto'>
				<div className='flex flex-col gap-6'>
					<ListingHead
						title={listing.title}
						imageSrc={listing.imageSrc}
						locationValue={listing.locationValue}
						id={listing.id}
						currentUser={currentUser}
					/>
					<div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
						<ListingInfo
							user={listing.user}
							category={category}
							description={listing.description}
							locationValue={listing.locationValue}
						/>
						<div className='order-first mb-10 md:order-last md:col-span-3'>
							<Map center={coordinates} />
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default ListingClient
