import React from 'react'
import Products from "../components/Products";
import productList from '../products.js';
import { Row, Col ,Container} from "react-bootstrap";



const HomeScreen = () => {
    return (
        <Container>
           <h1>Latestproduct</h1>
      <Row>
        {productList.map((product) => {
            return (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>)
        })}
      </Row> 
        </Container>
    )
}

export default HomeScreen
