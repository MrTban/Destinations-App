import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/Navbar/Narbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'

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
					<RegisterModal />
					<Navbar />
				</ClientOnly>
				{children}
			</body>
		</html>
	)
}
