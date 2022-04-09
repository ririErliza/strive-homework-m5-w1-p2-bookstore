import { Container, Row, Col } from 'react-bootstrap'

const Welcome = () => (

    <Container fluid className="jumbotron">
        <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
                <h1>Welcome!</h1>
                <p>Yo!Bookstore has many collections of books from romance to sci-fi. But mostly sci-fi</p>
            </Col>
        </Row>
    </Container>
)

export default Welcome