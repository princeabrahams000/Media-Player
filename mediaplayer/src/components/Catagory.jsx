import { faPenNib, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCatagoryApi, AllCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Catagory() {
  const [show, setShow] = useState(false);
  const [categoryName,setCatagoryName]=useState("")

  const handleClose = () => {setShow(false)
    setCatagoryName("")
  };
  const handleShow = () => setShow(true);

  const addCatagory = async()=>{


    if(categoryName){
      const reqBody ={
        categoryName,
        allVideo:[]
      }
      const result = await addCatagoryApi(reqBody)
      console.log(result);
  
      if(result.status>=200 && result.status<300){
        handleClose()
        toast.success('Catagory added successufully')
  
      }else{
        console.log(result);
        
      }
      
    }else{
      toast.info('Please add the Catagory name')
    }
  }

  const getAllCategory = async()=>{
    const result = await AllCategoryApi()
    console.log(result);
    
  }

  useEffect(()=>{
    getAllCategory()
  },[])

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
            <input type="text" placeholder='Category Name' className='form-control' onChange={(e)=>setCatagoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addCatagory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  )  
}

export default Catagory