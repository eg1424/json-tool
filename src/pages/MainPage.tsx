import React, {ChangeEvent, useState} from 'react';
import {Form, Container ,Row, Col, Button} from 'react-bootstrap';


const MainPage = ()=>{

    interface JsonFormState {
        input:string,
        output?:string
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setJsonForm({input:e.target.value});
    }

    const [jsonForm,setJsonForm] = useState<JsonFormState>({input:"",output:""});

    return (
        <Form>
        <Container>
        <Row>       
            <Col> 
            <Form.Group className="mb-3" controlId="jsonForm.input">
            <Form.Label>Input</Form.Label>
            <Form.Control as="textarea" rows={10} value={jsonForm.input} onChange={handleChange}/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="jsonForm.output">
            <Form.Label>Output</Form.Label>
            <Form.Control as="textarea" rows={10} value={jsonForm.output} readOnly />
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Button>Format</Button>
        </Row>
        </Container>
      </Form>
    )
}

export default MainPage;

