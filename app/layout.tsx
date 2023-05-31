import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/Navbar/Narbar'
import ClientOnly from './components/ClientOnly'
import LoginModal from './components/Modals/LoginModal'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUset'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
	title: 'MrTban | Prueba técnica COOL',
	description:
		'Aplicación de registro de destinos turísticos donde los usuarios pueden agregar, ver y buscar destinos.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const currentUser = await getCurrentUser()

	return (
		<html lang='en'>
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<LoginModal />
					<RegisterModal />
					<Navbar currentUser={currentUser} />
				</ClientOnly>
				{children}
			</body>
		</html>
	)
}
