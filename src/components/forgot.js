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
export default function Forgot(){
    useClass('page-login')

    const handleSendEmail = () => {
        console.log('Estou aqui ')
    }
    return(
        <div className='mt-5 flex-row align-items-center'>
        <Container>
            <Row className='justify-content-center'>
                <Col md='6'>
                    <Card>
                        <CardBody>
                            <Form>
                                <h1>Forgot</h1>
                                <p>Enter e-mail. and you will receive a email with link to reset your password</p>
                                <InputGroup className='mb-3'>
                                    <Input type='text' placeholder='E-mail' />
                                </InputGroup>
                            
                                <InputGroup className='mb-3'>
                                    <Button outline color="primary" onClick={handleSendEmail}> GO!</Button>
                                    <Link to='/login' >
                                        <Button color='link'>Login</Button>
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