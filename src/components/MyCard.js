import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {title, children,picture} = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`images/${picture}.png`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {children}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}