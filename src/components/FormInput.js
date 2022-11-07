import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export function FormInput() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Subject</Form.Label>
                <Form.Control placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Contact</Form.Label>
                <Form.Control placeholder="I have tabs, found a bug" />
            </Form.Group>


            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    );
}



