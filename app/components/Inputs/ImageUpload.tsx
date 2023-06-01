'use client'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
	var cloudinary: any
}

interface ImageUploadProps {
	onChange: (value: string) => void
	value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
	const handleUpload = useCallback(
		(result: any) => {
			onChange(result.info.secure_url)
		},
		[onChange]
	)

	return (
		<CldUploadWidget
			onUpload={handleUpload}
			uploadPreset='qa5w4mpt'
			options={{
				maxFiles: 1,
			}}
		>
			{({ open }) => {
				return (
					<div
						onClick={() => open?.()}
						className='relative flex flex-col justify-center items-center cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-400 gap-4 text-neutral-600 rounded-lg'
					>
						<TbPhotoPlus size={54} />
						<div className='font-bold text-lg'>Click to upload</div>
						{value && (
							<div className='absolute inset-0 w-full h-full'>
								<Image
									alt='Upload'
									fill
									style={{ objectFit: 'cover', borderRadius: 8 }}
									src={value}
								/>
							</div>
						)}
					</div>
				)
			}}
		</CldUploadWidget>
	)
}

export default ImageUpload
