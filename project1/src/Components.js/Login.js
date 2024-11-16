import React from 'react'
import { useState } from 'react';
import { Button, Col, Row, Offcanvas, Alert, Container, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import navlogo from '../Images.js/navlogo.png'
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //USE NAVIGATION

    // const navigate = useNavigate()

    return (

        <div className='loginpage'>

            <div className='header'>
                <Row className='reddd'>
                    <Col className='nav'>

                        <div className='nav1'>
                            <div className='nav1-logo'> <img src={navlogo} className='nav1-logo1' /> </div>
                            <div className='nav1-name'> gt software </div>
                        </div>

                        <div className='nav2'>

                            <div className='nav2-home'> &nbsp; Home &nbsp;</div>
                            <div className='nav2-knowledgebase'> &nbsp; knowledge base &nbsp; </div>
                            <div className='nav2-button'> <button className='nav2-button1'> Sumbit a ticket </button> </div>

                            <div className='nav2-login-signup'>
                                <a href='/' className='nav2-ls'> login </a>
                                <div className='nav2-line'> | </div>
                                <a href='/signup' className='nav2-ls'> Sign up </a>
                            </div>

                        </div>

                        <div className='nav2-mobile'>
                            {/* <div className='nav2-icon'> <i class="bi bi-list icn"></i> </div> */}

                            {/* <div className="nav2">
                                <div className="nav2-home">
                                    <i className="bi bi-house"></i> Home
                                </div>
                                <div className="nav2-knowledgebase">
                                    <i className="bi bi-book"></i> Knowledge Base
                                </div>
                                <div className="nav2-button">
                                    <button className="nav2-button1">Submit a ticket</button>
                                </div>
                            </div> */}

                            {/* Mobile Nav (Offcanvas Icon) */}
                            <div className="nav2-mobile-btn">
                                <i
                                    className="bi bi-list icn"
                                    onClick={handleShow}
                                    style={{ fontSize: '2rem', cursor: 'pointer' }}
                                />
                            </div>

                            {/* Offcanvas for mobile */}
                            <Offcanvas show={show} onHide={handleClose} placement="end">
                                <Offcanvas.Header closeButton>
                                    <div className="nav2-login-signup" style={{ position: 'relative' }}>
                                        <a href="/" className="nav2-ls">login</a>
                                        <div className="nav2-line"> | </div>
                                        <a href="/signup" className="nav2-ls">Sign up</a>
                                    </div>
                                </Offcanvas.Header>
                                <Offcanvas.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <div className="nav2-homem">
                                        <i className="bi bi-house"></i> Home
                                    </div>
                                    <div className="nav2-knowledgebasem">
                                        <i className="bi bi-book"></i> Knowledge Base
                                    </div>
                                    <div className="nav2-buttonm">
                                        <button className="nav2-button1">Submit a ticket</button>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>

                    </Col>

                </Row>
            </div>

            <div className="container">
                <Row>
                    <Col lg={3}> </Col>

                    <Col lg={6} >

                        <Card className="card" style={{ border: 'none', borderRadius: '15px' }}>

                            <div className="cardin">

                                <p className="login-h1"> Log in to support portal </p>
                                <p className="login-h2"> Are you a new user? <a href='/signup' className="login-signup"> Sign up with us </a> </p>
                                <p className="login-h3"> Your e-mail address <p className="star"> * </p> </p>
                                <p> <input type="text" className="input" placeholder='Your e-mail address' /> </p>
                                <p className="login-h3"> Password <p className="star"> * </p> </p>
                                <p> <input type="text" className="input" placeholder='Password' /> </p>
                                <p className="login-h4"> <p className="checkbox"> <input type="checkbox" className="checkboxin " /> </p> Remember me on this computer </p>
                                <p className="loginbutton"> <button className="loginbuttonin"> Login </button> </p>
                                <p className="forgotpassword"> <a href="#" className="forgotpasswordin"> Forgot your password? </a> </p>
                            </div>

                        </Card>

                        <div className="already"> Are you an agent? <a href="#" className="loginhere"> Login here </a> </div>


                    </Col>

                    <Col lg={3}> </Col>
                </Row>
            </div>
            <div className='fooder'>
                <Row>
                    <Col>

                        <div className="downnav">
                            &nbsp;  <p className="downnav1"> Helpdesk Software by </p> &nbsp;
                            &nbsp;  <p className="downnav2"> <a href="#" className="downnav2in"> Fresdesk </a> </p> &nbsp;
                            &nbsp;  <p className="downnavline"> | </p> &nbsp;
                            &nbsp;  <p className="downnav3"> <a href="#" className="downnav3in"> Cookie Policy </a> </p> &nbsp;
                            &nbsp;  <p className="downnav4"> <a href="#" className="downnav4in"> Privacy policy </a> </p> &nbsp;
                        </div>

                    </Col>
                </Row>
            </div>
        </div>







    )
}

export default Login