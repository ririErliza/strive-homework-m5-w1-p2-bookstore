import { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Books from '../Data/Books.json'

class LatestRelease extends Component{

    render(){

        return(
<Container>
    <Row>
        {Books.map((book)=>(
        
            <Col xs={6} md={3} className="mb-3" key={book.asin}>
                <Card className="h-100">
                    <Card.Img variant="top" src={book.img} className="h-75"/>
                    <Card.Body>
                        <Card.Title className="text-truncate">{book.title}</Card.Title>
                        <Card.Text>
                            $ {book.price} <br></br>
                            {book.category}
                        </Card.Text>
                        
                        
                    </Card.Body>
                    
                </Card>
            </Col>
        

        ))

        }
        
            
            
            
       
    </Row>
</Container>
        )
    }
}

export default LatestRelease