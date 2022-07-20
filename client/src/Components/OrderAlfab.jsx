import React from 'react'
import {useDispatch} from 'react-redux';
import { sortName } from '../Store/Actions';
import {ASCENDENTE, DESCENDENTE} from '../Constants/SortConst'

function OrderAlfab() {
    let dispatch = useDispatch()
    let handleSelect=(e)=>{
      dispatch(sortName(e.target.value))
    }
    return (
      <select name='select' onChange={handleSelect}> 
        <option value='selected' hidden > Ordenar </option>
        <option value={ASCENDENTE}> A - Z </option>
        <option value={DESCENDENTE}> Z - A </option>
      </select>
      
  )
}

export default OrderAlfab