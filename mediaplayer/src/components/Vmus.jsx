import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'


function Vmus() {
  return (
    <Row className='w-100 ms-1 '>
      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
        <VideoCard/>
      </Col>
      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
        <VideoCard/>
      </Col>
      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
        <VideoCard/>
      </Col>
      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
        <VideoCard/>
      </Col>
      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
        <VideoCard/>
      </Col>
    
      
    </Row>
  )
}

export default Vmus