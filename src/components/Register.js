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
export default function Register(props) {
    useClass('page-login')

    const handlecreate = () => {
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
                                    <h1>Register</h1>
                                    <p>Enter e-mail,name and password to create account. Already registered? <Link to='/login'>Login</Link></p>
                                    <InputGroup className='mb-3'>
                                        <Input type='text' placeholder='Name' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Input type='text' placeholder='E-mail' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Input type='password' placeholder='Password' />
                                    </InputGroup>
                                    <InputGroup className='mb-3'>
                                        <Button outline color="primary" onClick={handlecreate}>Register!</Button>

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