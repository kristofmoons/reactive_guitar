import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";

export function About() {
    const [member, setMember] = useState(350);

    useEffect(() => {
        setTimeout(() => {
            setMember((member) => member + 1);
        }, 1000);
    });

    return (
        <section id="sec-about" className="sec-about pt-3 pb-5">
            <Container>
                <Row>
                    <Col md={10} lg={10}>
                        <h1>About us</h1>
                        <p className="mt-4 mb-4">The Best Way to Conquer Your Guitar Goals. Learn To Play Your Favorite
                            Songs! There’s nothing better than playing
                            the songs you love! So you’ll get tabs for popular songs from all eras and
                            styles – so you can play the ones you love, entertain your friends and try different
                            genres.</p>
                    </Col>
                </Row>

                <Row mt={4}>
                    <Col sm={4}>
                        <h4>{member}</h4>
                        <hr/>
                        <h5>members</h5>
                    </Col>

                    <Col sm={4}>
                        <h4>2</h4>
                        <hr/>
                        <h5>artists </h5>
                    </Col>

                    <Col sm={4}>
                        <h4>3</h4>
                        <hr/>
                        <h5>songs</h5>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


