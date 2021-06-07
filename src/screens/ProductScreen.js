import React from "react";
import { Link } from "react-router-dom";
import { Image,Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
const img = product.image
console.log(match.params.id)
console.log("&&&&", img)

  return (
    <>
      <Link className="btn btn-light my-3">Go Back </Link>

      <Row>
        <Col md={6}>
          <Image src={img}  alt={product.name}  />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
             
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup.Item>
              <Row>
                <Col>price:</Col>
                <Col>
                  <strong>{product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                { product.countInStock > 0 ? 'In Stock' : 'Outof Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
<Button className="btn btn-block" type="button" disabled={product.countInStock === 0}>
    Add to Cart
</Button>
            </ListGroup.Item>
            
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
  