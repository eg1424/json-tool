import React, {ChangeEvent, useState} from 'react';
import {Form, Container ,Row, Col, Button} from 'react-bootstrap';


const ReactJsonViewCompare = require('react-json-view-compare');

const MainPage = ()=>{

    interface JsonFormState {
        inputLeft:string,
        inputRight:string,
        outputLeft?:Object,
        outputRight?:Object,
        errorLeft?:string,
        errorRight?:string
    }
    
    const [jsonForm,setJsonForm] = useState<JsonFormState>({inputLeft:"",inputRight:""});


    const handleChangeLeft = (e:ChangeEvent<HTMLInputElement>)=>{
        const { output: outputLeft, errorMessage: errorLeft } = parseJson(e);    

        setJsonForm({...jsonForm ,inputLeft:e.target.value, outputLeft, errorLeft});
    }

    const handleChangeRight = (e:ChangeEvent<HTMLInputElement>)=>{
        const { output: outputRight, errorMessage: errorRight } = parseJson(e);  
        setJsonForm({...jsonForm , inputRight:e.target.value, outputRight, errorRight});
    }

    const parseJson = (e: React.ChangeEvent<HTMLInputElement>) => {
        let output = {};
        let errorMessage = "";
        try {
            output = JSON.parse(e.target.value);
        } catch (error: any) {
            errorMessage = error.message;
        }
        return { output, errorMessage };
    }


    return (
        <Form>
        <Container>
        <Row>       
            <Col> 
            <Form.Group className="mb-3" controlId="jsonForm.input">
            <Form.Label>Input 1</Form.Label>
            <Form.Control as="textarea" rows={10} value={jsonForm.inputLeft} onChange={handleChangeLeft}/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="jsonForm.output">
            <Form.Label>Input 2</Form.Label>
            <Form.Control as="textarea" rows={10} value={jsonForm.inputRight}  onChange={handleChangeRight}/>
            </Form.Group>
            </Col>
        </Row>
        {(jsonForm.errorLeft || jsonForm.errorRight) &&

        <Row>
            <Col>
            <Form.Group className="mb-3" controlId="jsonForm.errorLeft">
            <Form.Label>Error 1</Form.Label>
            <Form.Control as="textarea" rows={5} value={jsonForm.errorLeft}  readOnly className='text-danger'/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="jsonForm.errorRight">
            <Form.Label>Error 2</Form.Label>
            <Form.Control as="textarea" rows={5} value={jsonForm.errorRight}  readOnly className='text-danger'/>
            </Form.Group>
            </Col>
        </Row>
        }
        {jsonForm.outputLeft && jsonForm.outputRight &&
        <Row>
            <Col>
                <ReactJsonViewCompare oldData={ jsonForm.outputLeft} newData={jsonForm.outputRight} />
            </Col>
        </Row>
        }
        </Container>
      </Form>
    )
}

export default MainPage;



