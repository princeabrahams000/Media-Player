import { faCloudArrowUp, faFilm, faIcons } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
faFilm


function Add() {
  const [Video, setVideo]= useState({
    caption:"",
    image: "",
    url:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

/*   const ValidateLink = (e) =>{
    console.log(e.target.value);
    const link = e.target.value
  if(link.startsWith('https://youtu.be/')){
    const ytkey = link.slice(-31,-20)
    console.log(ytkey);
    let embedLink = `https://www.youtube.com/embed/${ytkey}`
    setVideo({...Video,url:embedLink})
  }else{
    const ytkey = link.slice(-11)
    console.log(ytkey);
    let embedLink = `https://www.youtube.com/embed/${ytkey}`
    setVideo({...Video,url:embedLink})
  }
} */

  const handleClose1 = ()=>{
    setVideo({
      caption:"",
      image:"",
      url:""
    })
  }

  const handleUpload = (e) =>{
    e.preventDefault()
    const {caption, image, url} = Video
    if(!caption || !image || !url){
      alert('please fill the form completely')
    }
    else{
      if(url.startsWith('https://youtu.be/')){
        const ytkey = url.slice(-31,-20)
        console.log(ytkey);
        let embedLink = `https://www.youtube.com/embed/${ytkey}`
        setVideo({...Video,url:embedLink})
        console.log(Video);
      }
      else if(url.endsWith('?feature=shared')){
        const ytkey = url.slice(-26,-15)
        console.log(ytkey);
        let embedLink = `https://www.youtube.com/embed/${ytkey}`
        setVideo({...Video,url:embedLink})
        console.log(Video);
      }
        else{
        const ytkey = url.slice(-11)
        console.log(ytkey);
        let embedLink = `https://www.youtube.com/embed/${ytkey}`
        setVideo({...Video,url:embedLink})
          console.log(Video);
      }
    }

  }

                                               
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 id='h'>Upload new Video</h5>
        <button className='btn' onClick={handleShow}>
        <FontAwesomeIcon icon={faCloudArrowUp} size='xl'/>
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 border-secondary rounded'>
            <input type="text" placeholder='Video Caption' className='form-control mt-3' onChange={(e)=>setVideo({...Video, caption:e.target.value})} value={Video.caption} />
            <input type="text" placeholder='Video Image' className='form-control mt-3'  onChange={(e)=>setVideo({...Video, image:e.target.value})} value={Video.image}/>
            <input type="text" placeholder='Video URL' className='form-control mt-3' onChange={(e)=>setVideo({...Video,url:e.target.value})} value={Video.url}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
  )
}

export default Add