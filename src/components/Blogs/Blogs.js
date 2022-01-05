import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../images/blog-1.png';
import img2 from '../../images/blog-2.png';
import img3 from '../../images/blog-3.png';
import img4 from '../../images/blog-4.png';

const Blogs = () => {
    return (
        <div>
            <div className='container mt-5 pb-5'>
                <div className='text-center mb-5 pt-5 pb-1'>
                    <h6 style={{ color: 'rgb(197,168,128)' }}>FEATURED BLOGS</h6>
                    <h1>Latest Featured Blog</h1>
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className='img-fluid' src={img1} />
                            <Card.Body>
                                <Card.Title>Learn: What is a DAC?</Card.Title>
                                <Card.Text><small className='text-muted'>Okay, so you are just starting and are confused by some of the terms in the audiophile equipment world. Don't worry. First, you can start here with our hardware terminology guide ...</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>OCT. 20, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>8 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className='img-fluid' src={img2} />
                            <Card.Body>
                                <Card.Title>Great Wireless Headphone</Card.Title>
                                <Card.Text><small className='text-muted'>The Beats solo 3 is a new true wireless earphone from Beats. The company is best known for its premium headphones that hit way above their price point.</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>OCT. 22, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>3 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className='img-fluid' src={img3} />
                            <Card.Body>
                                <Card.Title>Noise-cancellation feature</Card.Title>
                                <Card.Text><small className='text-muted'>Noise-cancelling headphones have significantly advanced in recent years. You can now block out loud noises, as well as general background noise and ambient sounds.</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>NOV. 01, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>9 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className='img-fluid' src={img4} />
                            <Card.Body>
                                <Card.Title>Headphones Evolution</Card.Title>
                                <Card.Text><small className='text-muted'>If you are reading this on a computer, there is an excellent chance that you are wearing, or within arm's reach of, a pair of headphones or earbuds. To visit a modern office place is to walk into ...</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>NOV. 03, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>5 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blogs;