import { create } from 'zustand'

interface TravelModalStore {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const useTravelModal = create<TravelModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}))

export default useTravelModal
