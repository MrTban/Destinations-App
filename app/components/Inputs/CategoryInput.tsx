'use client'

import { IconType } from 'react-icons'

interface CategoryInputProps {
	icon: IconType
	label: string
	selected: boolean
	onClick: (value: string) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
	icon: Icon,
	label,
	selected,
	onClick,
}) => {
	return (
		<div
			onClick={() => onClick(label)}
			className={`
        flex
        flex-col
        items-center
        rounded-xl
        border-2
        p-4
        m-auto
        gap-3
        hover:border-black
        transition
        cursor-pointer        
        ${selected ? 'border-cyan-400' : 'border-neutral-200'}
        ${selected ? 'shadow-xl shadow-black/20' : 'shadow-none'}
      `}
		>
			<Icon size={36} />
			<div className='font-semibold'>{label}</div>
		</div>
	)
}

export default CategoryInput
