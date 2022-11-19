import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
const Card = (props) => {
  const { name, flickr_images, description, first_flight } = props.data;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.data)
  return (
    <>
      <div onClick={handleShow} className="card" style={{ backgroundImage: `url(${flickr_images})` }}>
        <p className="collection">Rockets</p>
        <h2 className="heading">{name}</h2>
        <button className="btn">Show All</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Description: {description}</Modal.Body>
        <Modal.Body>First Flight: {first_flight}</Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
