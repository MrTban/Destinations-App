'use client'

import { signIn } from 'next-auth/react'
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'

import Modal from './Modal'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import { useRouter } from 'next/navigation'

const LoginModal = () => {
	const router = useRouter()

	const registerModal = useRegisterModal()
	const loginModal = useLoginModal()

	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true)

		signIn('credentials', {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false)

			if (callback?.ok) {
				toast.success('Conectado')
				router.refresh()
				loginModal.onClose()
			}

			if (callback?.error) {
				toast.error(callback.error)
			}
		})
	}

	const toggle = useCallback(() => {
		loginModal.onClose()
		registerModal.onOpen()
	}, [loginModal, registerModal])

	const bodyContent = (
		//* LOGIN ACCOUNT
		<div className='flex flex-col gap-4'>
			<Heading title='Bienvenido de nuevo a COOL' subtitle='Inicia sesión!' />
			{/* //* EMAIL INPUT */}
			<Input
				id='email'
				label='Email'
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
		//*	 LOGIN WITH EMAIL PROVIDERS
		<div className='flex flex-col gap-4 mt-3'>
			<hr />

			{/* //* GOOGLE */}
			<Button
				outline
				label='Continuar con Google'
				icon={FcGoogle}
				onClick={() => signIn('google')}
			/>

			{/* 
				//? MICROSOFT 
				//TODO: ADD MICROSOFT ICON
			*/}

			<div className='text-neutral-500 text-center mt-4 font-light'>
				<div className='flex flex-row items-center justify-center gap-2'>
					<div>¿Primera vez en COOL?</div>
					<div
						onClick={toggle}
						className='text-neutral-800 cursor-pointer hover:underline'
					>
						Crea una cuenta
					</div>
				</div>
			</div>
		</div>
	)

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title='Iniciar sesión'
			actionLabel='Continuar'
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	)
}

export default LoginModal
