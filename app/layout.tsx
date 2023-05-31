import ClientOnly from './components/ClientOnly'
import Modal from './components/Modals/Modal'
import Navbar from './components/Navbar/Narbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
	title: 'MrTban | Prueba técnica COOL',
	description:
		'Aplicación de registro de destinos turísticos donde los usuarios pueden agregar, ver y buscar destinos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ClientOnly>
					<Modal isOpen title='Hola Viajero' />
					<Navbar />
				</ClientOnly>
				{children}
			</body>
		</html>
	)
}
