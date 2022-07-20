import React from 'react'
import { useDispatch } from 'react-redux'
import { AÑADIDAS, EXISTENTES, TODAS } from '../Constants/Filters'
import { filterOrigin } from '../Store/Actions'

function FilterOrigin() {
    let dispatch= useDispatch()
    function handleFilter(e){
        dispatch(filterOrigin(e.target.value))
    }
    
  return (
    <select name='select' onChange={handleFilter}> 
        <option value='selected' hidden > Filtrar por: </option>
        <option value={AÑADIDAS}> Razas Añadidas </option>
        <option value={EXISTENTES}> Razas Existentes </option>
        <option value={TODAS}> Todas las Razas </option>
      </select>
  )
}

export default FilterOrigin