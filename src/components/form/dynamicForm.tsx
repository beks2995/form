import React, { FC } from 'react'
import { TDynamicForm } from 'common/types/types'
import FlatForm from './aboutForm/flatForm'
import HouseForm from './aboutForm/houseForm'
import Commercial from './aboutForm/commercial'
import Plot from './aboutForm/plot'
import Room from './aboutForm/room'
import CountryHouse from './aboutForm/countryHouse'
import Garage from './aboutForm/garage'

const DynamicForm: FC<TDynamicForm> = ({ watchBuilding, control }) => {
  switch (watchBuilding) {
    case 'flat':
      return <FlatForm control={control} />
    case 'house':
      return <HouseForm control={control} />
    case 'commercial':
      return <Commercial control={control} />
    case 'plot':
      return <Plot control={control} />
    case 'room':
      return <Room control={control} />
    case 'countryHouse':
      return <CountryHouse control={control} />
    case 'garage':
      return <Garage control={control} />
    default:
      return null
  }
}

export default DynamicForm
