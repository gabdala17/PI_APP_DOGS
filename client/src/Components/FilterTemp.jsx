import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTemper } from '../Store/Actions'

function FilterTemp() {
    let dispatch= useDispatch()
    let temperamentEx = useSelector(state=>state.temperament)
    function handleFilter(e){
        dispatch(filterTemper(e.target.value))
    }
  return (
    <select  onChange={handleFilter} name={'temperament'}>
            <option value='selected' hidden> Temperamentos </option>
            {temperamentEx.map(el=>{
              return (
                <option value={el.name ??""} key={el.id} className='option'>
                  {el.name}            
                </option>
              ) 
            })
            }
          </select>
  )
}

export default FilterTemp