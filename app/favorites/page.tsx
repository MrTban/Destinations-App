'use client'

import EmptyState from '../components/EmptyState'
import ClientOnly from '../components/ClientOnly'

import getCurrentUser from '../actions/getCurrentUser'

const FavoritesPage = () => {
	return (
		<ClientOnly>
			<EmptyState
				title='No se encontraron favoritos'
				subtitle='Parece que no tienes listas de favoritos.'
			/>
		</ClientOnly>
	)
}

export default FavoritesPage
