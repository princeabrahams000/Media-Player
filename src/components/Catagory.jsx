import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import VideoCard from './VideoCard'


function Catagory() {
  return (
    <>
      <div className='w-100 mt-1 p-4'>
        <button className='btn btn-warning w-100'>Add New Catagory<FontAwesomeIcon icon={faPlus} /></button>   
      </div>

      <div className='mt-5'>
        <div className='border border-secondary mt-3 rounded p-3 ms-2'>
          <div className="d-flex">
            <h5>Movie title</h5>
            <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
          </div>
        <VideoCard/>
        </div>
      </div>
    </>
  )  
}

export default Catagory