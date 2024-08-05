import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideoApi } from '../services/allApi'


function Vmus({addStatus}) {

  const [videoDetails, setVideoDetails] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] =useState([])

  const getVideo = async()=>{
    const result = await getVideoApi()
    setVideoDetails(result.data)
  }

  useEffect(()=>{
    getVideo()
  },[addStatus,deleteVideoStatus])
  console.log(videoDetails);


  return (

    <Row className='w-100 ms-1 '>

      {videoDetails?.length>0?
        videoDetails?.map((item)=>( <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
          <VideoCard displayVideo ={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>))
        :
        <p className='text-warning fs-5 mt-4'>No video yet uploaded....</p>}
    </Row>
  )
}

export default Vmus