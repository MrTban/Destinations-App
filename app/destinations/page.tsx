import EmptyState from '../components/EmptyState'
import ClientOnly from '../components/ClientOnly'
import DestinationsClient from './DestinationsClient'

import getCurrentUser from '../actions/getCurrentUser'
import getListings from '../actions/getListings'

const DestinationsPage = async () => {
	const currentUser = await getCurrentUser()

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState title='No autorizado' subtitle='Por favor inicie sesión' />
			</ClientOnly>
		)
	}

	const listings = await getListings({
		userId: currentUser.id,
	})

	if (listings.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title='No se encontraron destinos'
					subtitle='Parece que no tienes una listas de destinos'
				/>
			</ClientOnly>
		)
	}

	return (
		<ClientOnly>
			<DestinationsClient listings={listings} currentUser={currentUser} />
		</ClientOnly>
	)
}

export default DestinationsPage
