import React from 'react';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'


const Product = (props) => {
    console.log('test image', props.product.image) 
    console.log("test", props)
    return (
       
        <Card className='my-3 p-3 rounded' >
           
           <Link to={`/product/${props.product._id}`}>
                <Card.Img src={props.product.image} variant='top'/> 
            </Link>
           
            <Card.Body>
           
            <Link to={`/product/${props.product._id}`}>
                <Card.Title as='div' > <strong>{props.product.name}</strong></Card.Title> 
            </Link>
           
            <Card.Text as='div'>
            
          
            
            </Card.Text>
            <Card.Text as="h3">
       ${props.product.price}
            </Card.Text>
            
            </Card.Body>
            

        </Card>
    )
}

export default Product
