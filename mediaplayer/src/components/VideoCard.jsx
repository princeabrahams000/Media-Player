import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';



function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <> 
            <Card style={{ width: "100%" }} className=" mt-3  ms-md-0">
                <Card.Img onClick={handleShow} variant="top" src="https://cdnb.artstation.com/p/assets/images/images/010/238/621/large/ananthu-s-kumar-poster-2.jpg?1523352277" width={'100%'} height={'300px'} />
                <Card.Body className="d-flex justify-content-between">
                   
                    <Card.Text className="me-3">
                       Movie Title
                    </Card.Text>
                    {/* <button className="btn btn-primary"><FontAwesomeIcon icon={faTrashCan} /></button> */}
                    <Button variant="primary"><FontAwesomeIcon icon={faTrashCan} /></Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Title</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="444" src="https://www.youtube.com/embed/at9Jreair48?autoplay=1" title="Addiction (Official Video) Garry Sandhu | New Punjabi Video Song 2024 | Bipolar | Fresh Media Record" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
       
      </Modal>

        </>
    );
}

export default VideoCard;
