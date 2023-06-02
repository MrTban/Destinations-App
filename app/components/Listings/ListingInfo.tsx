'use client'

import { SafeUser } from '@/app/types'
import { IconType } from 'react-icons'

interface ListingInfoProps {
	user: SafeUser
	description: string
	category:
		| {
				icon: IconType
				label: string
				description: string
		  }
		| undefined
	locationValue: string
}

const ListingInfo: React.FC<ListingInfoProps> = ({
	user,
	description,
	category,
	locationValue,
}) => {
	return (
		<div>
			<div></div>
		</div>
	)
}

export default ListingInfo
