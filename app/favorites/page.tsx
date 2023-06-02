'use client'

import EmptyState from '../components/EmptyState'
import ClientOnly from '../components/ClientOnly'

import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteListings from '../actions/getFavoriteListings'
import FavoritesClient from './FavoritesClient'

const FavoritesPage = async () => {
	const favorites = await getFavoriteListings()
	const currentUser = await getCurrentUser()

	if (favorites.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title='No se encontraron favoritos'
					subtitle='Parece que no tienes listas de favoritos.'
				/>
			</ClientOnly>
		)
	}

	return (
		<ClientOnly>
			<FavoritesClient favorites={favorites} currentUser={currentUser} />
		</ClientOnly>
	)
}

export default FavoritesPage
