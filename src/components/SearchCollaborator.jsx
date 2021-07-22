import React from 'react'
import Breadcrumbs from './Breadcrumb';
import Navbar from './Navbar';

const SearchCollaborator = () => {
  return (
    <div className='gridMargin'>
      <Navbar />
      <Breadcrumbs />
      <div className='titles'>
      <h3>Buscar Colaborador</h3>
      </div>
    </div>
  )
}

export default SearchCollaborator
