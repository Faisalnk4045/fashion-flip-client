import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo2.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1a1a1a' }} className='py-5 mt-5 text-light'>
            <Container>
                <Row className='row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 mb-4'>
                    <Col className='mb-3'>
                        <div className='mb-4'>
                            <img src={logo} style={{ width: '170px' }} className='img-fluid' alt="" />
                        </div>
                    </Col>
                    <Col className='mb-3'>
                        <h4 className='mb-3 fw-bold'>Products</h4>
                        <p><small><i>View All</i></small></p>
                        <p><small><i>Special Offers</i></small></p>
                        <p><small><i>Pricing</i></small></p>
                        <p><small><i>Reviews</i></small></p>
                        <p><small><i>Best Value</i></small></p>
                    </Col>
                    <Col className='mb-3'>
                        <h4 className='mb-3 fw-bold'>Company</h4>
                        <p><small><i>About</i></small></p>
                        <p><small><i>Terms & Conditions</i></small></p>
                        <p><small><i>Privacy Policy</i></small></p>
                        <p><small><i>Press Center</i></small></p>
                        <p><small><i>Careers</i></small></p>
                    </Col>
                    <Col className='mb-3'>
                        <h4 className='mb-3 fw-bold'>Follow Us</h4>
                        <p>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram mx-3"></i>
                            <i className="fab fa-twitter"></i>
                        </p>
                        <h4 className='mt-5 mb-3 fw-bold'>Location</h4>
                        <p><small><i>Chattogram | Bangladesh</i></small></p>
                    </Col>
                </Row>
                <hr />
                <div className='d-flex flex-wrap justify-content-lg-between'>
                    <div>
                        All rights reserved © Fashion-Flip 2021
                    </div>
                    <div>
                        <small>Terms & Conditions</small>
                        <small className='mx-4'>Claim</small>
                        <small>Privacy & Policy</small>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;