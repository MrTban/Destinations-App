'use client'

import { IconType } from 'react-icons'

interface CategoryBoxProps {
	icon: IconType
	label: string
	selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label, selected }) => {
	return (
		<div
			// onClick={handleClick}
			className={`
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-2 
      p-3 
      border-b-2
      hover:text-neutral-900 
      transition
      cursor-pointer
       ${selected ? 'border-b-cyan-400' : 'border-transparent'}
       ${selected ? 'text-neutral-950' : 'text-neutral-500'}
       `}
		>
			<Icon size={28} />
			<div
				className={`
					${selected ? 'text-base' : 'text-sm'}
					${selected ? 'font-bold' : 'font-medium'}
				`}
			>
				{label}
			</div>
		</div>
	)
}

export default CategoryBox
