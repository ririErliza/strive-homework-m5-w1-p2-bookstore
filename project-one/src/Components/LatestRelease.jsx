import { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

class LatestRelease extends Component{

    render(){
        return(
<Container>
    <Row>
        <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                   
                    </Card.Text>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
                
            </Card>
            </Col>
            
            
            
       
    </Row>
</Container>
        )
    }
}

export default LatestRelease