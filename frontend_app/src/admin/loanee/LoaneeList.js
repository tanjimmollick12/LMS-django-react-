import React from 'react'
import {Table, Button, Row, Col} from 'react-bootstrap'
import './newloanee.css'
import {LinkContainer} from "react-router-bootstrap";
import Header from "../../components/Header";

const LoaneeList = () => {


    return (
        <>
            <Header/>
            <Row className='align-items-center'>
                <Col>
                    <h1>Loanee List</h1>

                </Col>
            </Row>
            <Row>

                <Col className='text-left'>


                        <LinkContainer to='/addloanee'>
                        <Button className='my-3'>
                            <i className='fas fa-plus'></i> Add Loanee
                        </Button>
                        </LinkContainer>

                </Col>

            </Row>

            <>
                <Table

                    style={{padding: "10px 10px 5px 5px", margin: "10px 10px 10px 10px"}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Date Of Birth</th>
                        <th>Email</th>
                        <th>Contact</th>

                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>h</td>
                        <td>f</td>
                        <td>v</td>
                        <td>c</td>
                        <td>d</td>
                        <td>x</td>
                        <td>w</td>

                        <td>

                            <Button
                                variant='danger'
                                className='btn-sm'

                            >
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>

                    </tbody>
                </Table>
            </>

        </>
)
}

export default LoaneeList
