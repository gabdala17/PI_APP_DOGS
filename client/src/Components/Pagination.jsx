import React from 'react'
import '../CSS/pagination.css'
function Pagination({page, dogsPerPage, allDogs}) {
    let numberPage=[]
    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        numberPage.push(i) 
    }
  return (
    <div className='pagination'>
  { numberPage.map(number=>(
    <div className='paginationNumber' onClick={e=>page(e,number)}>{number}</div>
   ))}
    </div>
  )
}

export default Pagination