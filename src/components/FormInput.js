import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function FormInput() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2dk9k98', 'template_wsjyke7', form.current, 'kzBBe_4NASng7Cd_7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Form ref={form} onSubmit={sendEmail} >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="user_email"  placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="user_name"  placeholder="Name" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Contact</Form.Label>
                <Form.Control name="message" placeholder="I have tabs, found a bug" />
            </Form.Group>


            <Button variant="dark" type="submit" value="Send" onClick={() =>alert(`mail has been sent`)}>
                Submit
            </Button>
        </Form>
    );
}



