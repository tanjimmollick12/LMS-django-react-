import React, { useEffect,useState }  from 'react'
import {Col, Container, Row} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loan from "../components/Loan";
// import loans from "../Loans";
import axios from 'axios';
const Home = () => {

  const [loans, setLoans] = useState([])
  useEffect(() => {

    axios.get('http://localhost:8000/api/loanlist')
      .then(resp => {
        setLoans(resp.data)
      })
  }, [])

    return (
        <div>
            <Header/>
            <main>
                <Container className={'py-3'}>
                    <h1>Offered Loans</h1>
                    <Row>
                        {loans.map(loan=>(
                            <Col sm={12} md={6} lg={4} xl={3}>
                               <Loan loan={loan}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default Home
