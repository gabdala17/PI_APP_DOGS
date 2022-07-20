import React from 'react'
import { useDispatch } from 'react-redux'
import { ASCENDENTE, DESCENDENTE } from '../Constants/SortConst'
import { sortWeight } from '../Store/Actions'

function OrderWeight() {
    let dispatch = useDispatch()
    let handleSelect=(e)=>{
      dispatch(sortWeight(e.target.value))
    }
    return (
      <select name='select' onChange={handleSelect}> 
        <option value='selected' hidden > Ordenar por Peso </option>
        <option value={ASCENDENTE}> Menor a Mayor </option>
        <option value={DESCENDENTE}> Mayor a Menor </option>
      </select>   
  )
}

export default OrderWeight