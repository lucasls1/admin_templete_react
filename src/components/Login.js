import React from 'react'
import useClass from './../hooks/add-class-body'
import { Link } from 'react-router-dom'
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

    const handleLogin = () => {
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
                                    <p>Enter e-mail and password to access. New? <Link>Sing-up</Link></p>
                                    <InputGroup className='mb-3'>
                                        <Input type='text' placeholder='E-mail' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Input type='password' placeholder='Password' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Button outline color="primary" onClick={handleLogin}> GO!</Button>

                                    </InputGroup>
                                    <InputGroup>
                                        <Link to='forgot'>
                                            <Button color="link">Forgot Passowrd</Button>
                                        </Link>
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