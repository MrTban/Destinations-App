'use client'

import EmptyState from '../components/EmptyState'
import ClientOnly from '../components/ClientOnly'

import getCurrentUser from '../actions/getCurrentUser'

const DestinationsPage = () => {
	return (
		<ClientOnly>
			<EmptyState
				title='No se encontraron destinos'
				subtitle='Parece que no has creado ningún destino.'
			/>
		</ClientOnly>
	)
}

export default DestinationsPage
