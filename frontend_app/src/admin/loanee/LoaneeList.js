import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Table, Button, Row, Col} from 'react-bootstrap'
import './newloanee.css'
import {LinkContainer} from "react-router-bootstrap";
import Header from "../../components/Header";
import {useSelector} from 'react-redux'

const LoaneeList = () => {

    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin

    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        },
    }

    const [loanee, setLoanee] = useState([])
    useEffect(() => {

        axios.get('http://localhost:8000/api/loaneelist', config)
            .then(resp => {
                setLoanee(resp.data)
            })
    }, [])

    console.log(loanee)
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
                        <th>Gender</th>
                        <th>Loan Amount</th>
                        <th>Rate</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {loanee.map((l) => (
                        <tr key={l.id}>
                            <td>{l.id}</td>
                            <td>{l.name}</td>
                            <td>{l.gender} </td>
                            <td>{l.loan_amount} TK</td>
                            <td>{l.rate} %</td>
                            <td>{l.time} years</td>

                            <td>
                                <LinkContainer to={`/addemi/${l.id}`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-plus'></i>
                                    </Button>
                                </LinkContainer>
                                <LinkContainer to={`/updateproduct/${l.id}`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-edit'></i>
                                    </Button>
                                </LinkContainer>
                                {/*<Button*/}
                                {/*    variant='danger'*/}
                                {/*    className='btn-sm'*/}
                                {/*    onClick={() => deleteHandler(l.id)}*/}
                                {/*>*/}
                                {/*    <i className='fas fa-trash'></i>*/}
                                {/*</Button>*/}
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </>

        </>
    )
}

export default LoaneeList
