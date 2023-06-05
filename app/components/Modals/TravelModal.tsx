'use client'

import { useMemo, useState } from 'react'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'

import useTravelModal from '@/app/hooks/useTravelModal'

import Modal from './Modal'
import Heading from '../Heading'
import { categories } from '../Navbar/categorias'
import CategoryInput from '../Inputs/CategoryInput'
import CountrySelect from '../Inputs/CountrySelect'
import Map from '../Map'
import dynamic from 'next/dynamic'
import ImageUpload from '../Inputs/ImageUpload'
import Input from '../Inputs/Input'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { error } from 'console'

enum STEPS {
	CATEGORY = 0,
	LOCATION = 1,
	IMAGES = 2,
	DESCRIPTION = 3,
}

const TravelModal = () => {
	const router = useRouter()
	const travelModal = useTravelModal()

	const [step, setStep] = useState(STEPS.CATEGORY)
	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			category: '',
			location: null,
			imageSrc: '',
			title: '',
			description: '',
		},
	})

	const category = watch('category')
	const location = watch('location')
	const imageSrc = watch('imageSrc')

	const Map = useMemo(
		() =>
			dynamic(() => import('../Map'), {
				ssr: false,
			}),
		[location]
	)

	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldValidate: true,
			shouldDirty: true,
			shouldTouch: true,
		})
	}

	const onBack = () => {
		setStep((value) => value - 1)
	}

	const onNext = () => {
		setStep((value) => value + 1)
	}

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (step !== STEPS.DESCRIPTION) {
			return onNext()
		}

		setIsLoading(true)

		axios
			.post('/api/listings', data)
			.then(() => {
				toast.success('Destino Creado!')
				router.refresh()
				reset()
				setStep(STEPS.CATEGORY)
				travelModal.onClose()
			})
			.catch(() => {
				toast.error('Algo salió mal')
			})
			.finally(() => {
				setIsLoading(false)
			})
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

		return 'Anterior'
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
							onClick={(category) => setCustomValue('category', category)}
							selected={category === item.label}
							label={item.label}
							icon={item.icon}
						/>
					</div>
				))}
			</div>
		</div>
	)

	if (step === STEPS.LOCATION) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Donde se encuentra su destino?'
					subtitle='Ayude a los demas viajeros a encontrarlo'
				/>
				<CountrySelect
					value={location}
					onChange={(value) => setCustomValue('location', value)}
				/>
				<Map center={location?.latlng} />
			</div>
		)
	}

	if (step === STEPS.IMAGES) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Agrega una foto de tu destino'
					subtitle='Muestrale a los viejeros como se ve tu destino!'
				/>
				<ImageUpload
					value={imageSrc}
					onChange={(value) => setCustomValue('imageSrc', value)}
				/>
			</div>
		)
	}

	if (step === STEPS.DESCRIPTION) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Cómo describirías tu destino?'
					subtitle='Dile a los viejeros algo referente a tu destino!'
				/>
				<Input
					id='title'
					label='Título'
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<hr />
				<Input
					id='description'
					label='Descripción'
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
			</div>
		)
	}

	return (
		<Modal
			isOpen={travelModal.isOpen}
			onClose={travelModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
			title='Registra tu destino'
			body={bodyContent}
		/>
	)
}

export default TravelModal
