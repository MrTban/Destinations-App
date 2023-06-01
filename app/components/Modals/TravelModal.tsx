'use client'

import { useMemo, useState } from 'react'

import useTravelModal from '@/app/hooks/useTravelModal'

import Modal from './Modal'
import Heading from '../Heading'
import { categories } from '../Navbar/categorias'
import CategoryInput from '../Inputs/CategoryInput'

enum STEPS {
	CATEGORY = 0,
	LOCATION = 1,
	IMAES = 2,
	DESCRIPTION = 3,
}

const TravelModal = () => {
	const travelModal = useTravelModal()

	const [step, setStep] = useState(STEPS.CATEGORY)

	const onBack = () => {
		setStep((value) => value - 1)
	}

	const onNext = () => {
		setStep((value) => value + 1)
	}

	const actionLabel = useMemo(() => {
		if (step === STEPS.DESCRIPTION) {
			return 'Crear'
		}

		return 'Siguiente'
	}, [step])

	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.CATEGORY) {
			return undefined
		}

		return 'Volver'
	}, [step])

	let bodyContent = (
		<div className='flex flex-col gap-8'>
			<Heading
				title='Cuál de estas opciones se adapta mejor a tu destino?'
				subtitle='Elije una categoría'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto'>
				{categories.map((item) => (
					<div key={item.label} className='col-span-1'>
						<CategoryInput
							onClick={() => {}}
							selected={false}
							label={item.label}
							icon={item.icon}
						/>
					</div>
				))}
			</div>
		</div>
	)

	return (
		<Modal
			isOpen={travelModal.isOpen}
			onClose={travelModal.onClose}
			onSubmit={travelModal.onClose}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
			title='COOL el mejor lugar'
			body={bodyContent}
		/>
	)
}

export default TravelModal
