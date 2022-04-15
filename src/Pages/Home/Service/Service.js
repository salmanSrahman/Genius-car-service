import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, price, id } = service;
  const navigate = useNavigate();
  return (
    <Col>
      <Card>
        <div>
          <img src={img} alt="" className="img-fluid w-100" />
          <div className="p-2">
            <h4>{name}</h4>
            <h4>${price}</h4>
            <Button onClick={() => navigate(`/service/${id}`)}>
              See Details
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Service;
