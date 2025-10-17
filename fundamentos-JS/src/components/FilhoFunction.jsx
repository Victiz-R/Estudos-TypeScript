import React from 'react'

const FilhoFunction = ({onChildClick}) => {
  return (
    <button onClick={onChildClick} className='btn btn-primary mt-3 shadow-sm'>Botão Filho</button>
  )
}

export default FilhoFunction