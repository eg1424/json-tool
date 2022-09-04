import {Form, Container ,Row, Col} from 'react-bootstrap';

const MainPage = ()=>{
    return (
        <Form>
        <Container>
        <Row>       
            <Col> 
            <Form.Group className="mb-3" controlId="jsonForm.input">
            <Form.Label>Input</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="jsonForm.output">
            <Form.Label>Output</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Col>
        </Row>
        </Container>
      </Form>
    )
}

export default MainPage;

