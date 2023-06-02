'use client'

import useCountries from '@/app/hooks/useCountries'
import { Listing } from '@prisma/client'

import { SafeUser } from '@/app/types'
import { useRouter } from 'next/navigation'

interface ListingCardProps {
	data: Listing
	onAction?: (id: string) => void
	disabled?: boolean
	actionLabel?: string
	actionId?: string
	currentUser?: SafeUser | null
}

const ListingCard: React.FC<ListingCardProps> = ({
	data,
	onAction,
	disabled,
	actionLabel,
	actionId,
	currentUser,
}) => {
	const router = useRouter()
	const { getByValue } = useCountries()

	const location = getByValue(data.locationValue)

	return (
		<div>
			<div>Card</div>
		</div>
	)
}

export default ListingCard
