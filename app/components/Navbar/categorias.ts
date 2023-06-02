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
		label: 'Isla',
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
		label: 'Historico',
		icon: GiCastle,
		description: 'Este destino puede estar cerca a un lugar historico!',
	},
	{
		label: 'Pueblo',
		icon: GiVillage,
		description: 'En este destino puede encontrar pueblos pintorescos!',
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'Destino en el cual se puede acampar!',
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
		description: 'Destino de ciudade moderna!',
	},
	{
		label: 'Crucero',
		icon: GiCruiser,
		description: 'Destino para ir de crucero!',
	},
]
