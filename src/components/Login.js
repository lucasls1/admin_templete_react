import React from 'react'
import useClass from './../hooks/add-class-body'
import {

    Container,
    Col,
    Row,
    Card,
    CardBody,
    Form,
    Input,
    InputGroup,
    Button

} from 'reactstrap'
export default function Login() {
    useClass('page-login')

    const handleLogin=()=>{
        console.log('Estou aqui ')
    }
    return (
        <div className='mt-5 flex-row align-items-center'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md='6'>
                        <Card>
                            <CardBody>
                                <Form>
                                    <h1>Login</h1>
                                    <p>Enter e-mail and password to access</p>
                                    <InputGroup className='mb-3'>
                                        <Input type='text' placeholder='E-mail' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Input type='password' placeholder='Password' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                    <Button color="primary" onClick={handleLogin}> GO!</Button>
                                    </InputGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}