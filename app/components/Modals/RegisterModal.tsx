'use client'

import axios from 'axios'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import useLoginModal from '@/app/hooks/useLoginModal'

const RegisterModal = () => {
	const registerModal = useRegisterModal()
	const loginModal = useLoginModal()
	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true)

		axios
			.post('api/register', data)
			.then(() => {
				registerModal.onClose()
			})
			.catch((error) => {
				toast.error('Algo salió mal')
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const bodyContent = (
		//* CREATE ACCOUNT
		<div className='flex flex-col gap-4'>
			<Heading title='Bienvenido a COOL' subtitle='Crea una cuenta!' />
			{/* //* EMAIL INPUT */}
			<Input
				id='email'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			{/* //* NAME INPUT */}
			<Input
				id='name'
				label='Nombre'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			{/* //* PASSWORD INPUT */}
			<Input
				id='password'
				label='Contraseña'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	)

	const footerContent = (
		//*	 REGISTER WITH EMAIL PROVIDERS
		<div className='flex flex-col gap-4 mt-3'>
			<hr />

			{/* //* GOOGLE */}
			<Button outline label='Continuar con Google' icon={FcGoogle} onClick={() => {}} />

			{/* 
				//? MICROSOFT 
				//TODO: ADD MICROSOFT ICON
			*/}

			<div className='text-neutral-500 text-center mt-4 font-light'>
				<div className='flex flex-row items-center justify-center gap-2'>
					<div>¿Ya tiene una cuenta?</div>
					<div
						onClick={registerModal.onClose}
						className='text-neutral-800 cursor-pointer hover:underline'
					>
						Inicia sesión
					</div>
				</div>
			</div>
		</div>
	)

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title='Registro'
			actionLabel='Continuar'
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	)
}

export default RegisterModal
