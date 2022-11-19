import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MyCard = (props) => {
  const { image, name, status, wikipedia, agency } = props.data;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="card" onClick={handleShow} style={{ backgroundImage: `url(${image})` }}>
        <p>{name}</p>
        <Button className="btn" variant="primary" href={wikipedia}>
          Learn More
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>status: {status}</Modal.Body>
        <Modal.Body>agency: {agency}</Modal.Body>
      </Modal>
    </>
  );
};

export default MyCard;
