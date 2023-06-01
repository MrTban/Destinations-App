'use client'

import useTravelModal from '@/app/hooks/useTravelModal'

import Modal from './Modal'

const TravelModal = () => {
	const travelModal = useTravelModal()

	return (
		<Modal
			isOpen={travelModal.isOpen}
			onClose={travelModal.onClose}
			onSubmit={travelModal.onClose}
			actionLabel='Submit'
			title='COOL el mejor lugar'
		/>
	)
}

export default TravelModal
