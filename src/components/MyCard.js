import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";

function OpenCloseButton(props) {
    const {isOpen, onChangeIsOpen} = props;

    return <Button
        variant="outline-primary" size="sm"
        onClick={() => onChangeIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
    </Button>;
}

export function MyCard(props) {
    const {title, children} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={`images/CountryRoads.png`}/>
            <Card.Body>
                <OpenCloseButton isOpen={isOpen} onChangeIsOpen={() => setIsOpen(!isOpen)}/>
                <Card.Title>{title}</Card.Title>
                {isOpen && <Card.Text>
                    {children}
                </Card.Text>}

            </Card.Body>
        </Card>
    );
}