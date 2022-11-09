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
    const {title, children,imgPath} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Card style={{width: '18rem', marginBottom:"2vh"}}>
            <Card.Img variant="top" src={`images/${imgPath}`}/>
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