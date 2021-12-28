import React from 'react'
import {Card} from "react-bootstrap";
const Loan = ({loan}) => {
    return (
        <Card className={'my-3 p-3 rounded'}>
            <Card.Body>
                <Card.Title as={'div'}><strong>{loan.name}</strong></Card.Title>
                <Card.Text as={'div'}><strong>{loan.rate} %</strong></Card.Text>
                <Card.Text as={'div'}><strong>{loan.time} years ({loan.time*12} months)</strong></Card.Text>
                <Card.Text as={'div'}><strong>{loan.description}</strong></Card.Text>
            </Card.Body>

        </Card>
    )
}

export default Loan
