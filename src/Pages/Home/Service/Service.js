import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, price } = service;
  return (
    <Col>
      <Card>
        <div>
          <img src={img} alt="" className="img-fluid w-100" />
          <div className="p-2">
            <h4>{name}</h4>
            <h4>${price}</h4>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Service;
