import { BsSnow } from 'react-icons/bs'
import { FaSkiing } from 'react-icons/fa'
import {
	GiPoolDive,
	GiCactus,
	GiCastle,
	GiCaveEntrance,
	GiForestCamp,
	GiIsland,
	GiMountainClimbing,
	GiHiking,
	GiModernCity,
	GiVillage,
	GiCruiser,
} from 'react-icons/gi'
import { GrSafariOption } from 'react-icons/gr'
import { TbBeach, TbMountain } from 'react-icons/tb'

export const categories = [
	{
		label: 'Playa',
		icon: TbBeach,
		description: 'Este destino esta cerca de una playa!',
	},
	{
		label: 'Montaña',
		icon: TbMountain,
		description: 'Este destino esta cerca de una montaña!',
	},
	{
		label: 'Escalada',
		icon: GiMountainClimbing,
		description: 'En este destino se puede escalar!',
	},
	{
		label: 'Islas',
		icon: GiIsland,
		description: 'Este destino este en una isla!',
	},
	{
		label: 'Buceo',
		icon: GiPoolDive,
		description: 'Este destino se puede bucear y practicar deportes acuaticos!',
	},
	{
		label: 'Senderismo',
		icon: GiHiking,
		description: 'Este destino se puede hacer senderismo!',
	},
	{
		label: 'Esquí',
		icon: FaSkiing,
		description: 'En este destino se puede esquiar!',
	},
	{
		label: 'Historicos',
		icon: GiCastle,
		description: 'This property is in a castle!',
	},
	{
		label: 'Pueblos',
		icon: GiVillage,
		description: 'En estos destinos puede encontrar pueblos pintorescos!',
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'Destinos en los cuales se puede acampar!',
	},
	{
		label: 'Cueva',
		icon: GiCaveEntrance,
		description: 'Este destino puede ser una cueva!',
	},
	{
		label: 'Desierto',
		icon: GiCactus,
		description: 'Este destino puede ser un desierto o estar cerca de uno!',
	},
	{
		label: 'Safari',
		icon: GrSafariOption,
		description: 'En este destino se puede hacer safari!',
	},
	{
		label: 'Moderno',
		icon: GiModernCity,
		description: 'Destinos de ciudades modernas!',
	},
	{
		label: 'Crucero',
		icon: GiCruiser,
		description: 'Destinos para ir de crucero!',
	},
]
