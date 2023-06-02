'use client'

import axios from 'axios'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ListingCard from '../components/Listings/ListingCard'
import { SafeListing, SafeUser } from '../types'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'

interface DestinationsClientProps {
	listings: SafeListing[]
	currentUser: SafeUser | null
}

const DestinationsClient: React.FC<DestinationsClientProps> = ({
	listings,
	currentUser,
}) => {
	const router = useRouter()
	const [deletingId, setDeletingId] = useState('')

	const onCancel = useCallback(
		(id: string) => {
			setDeletingId(id)

			axios
				.delete(`/api/listings/${id}`)
				.then(() => {
					toast.success('destino eliminado')
					router.refresh()
				})
				.catch((error) => {
					toast.error(error?.response?.data?.error)
				})
				.finally(() => {
					setDeletingId('')
				})
		},
		[router]
	)

	return (
		<Container>
			<Heading title='Destinos' subtitle='Mi lista de destinos' />
			<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
				{listings.map((listing) => (
					<ListingCard
						key={listing.id}
						data={listing}
						actionId={listing.id}
						onAction={onCancel}
						disabled={deletingId === listing.id}
						actionLabel='Eliminar destino'
						currentUser={currentUser}
					/>
				))}
			</div>
		</Container>
	)
}

export default DestinationsClient
