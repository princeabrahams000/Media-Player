import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function VideoCard({displayVideo}) {
  console.log(displayVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "100%" }} className=" mt-3  ms-md-0">
        <Card.Img
          onClick={handleShow}
          variant="top"
          src={displayVideo?.image}
          width={"100%"}
          height={"300px"}
        />
        <Card.Body className="d-flex justify-content-between">
          <Card.Text className="me-3">{displayVideo?.caption}</Card.Text>
          
          <Button variant="primary">
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="444"
            src={`${displayVideo?.url}? autoplay=1`}
            title="Addiction (Official Video) Garry Sandhu | New Punjabi Video Song 2024 | Bipolar | Fresh Media Record"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
