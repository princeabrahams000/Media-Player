import { faPenNib, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCatagoryApi } from '../services/allApi';



function Catagory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCatagory = async()=>{
    
    const result = await addCatagoryApi()
    console.log(result);
    
  }
  return (
    <>
      <div className='w-100 mt-1 p-4'>
        <button onClick={handleShow} className='btn btn-warning w-100'>Add New Catagory<FontAwesomeIcon icon={faPlus} /></button>   
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faPenNib} />Add New Catagory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border rounded p-3 border-secondary'>
            <input type="text" placeholder='Category Name' className='form-control' />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )  
}

export default Catagory