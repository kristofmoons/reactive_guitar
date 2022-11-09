import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {Section} from "./Section";
import Button from "react-bootstrap/Button";

function EditOptionsButton(props) {
    const {onClick, children} = props;
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
}

function Guitar(props) {
    const {guitar, onEditGuitar} = props;
    return (
        <Col>
            <MyCard title={guitar.kind}>
                strings: {guitar.strings}
                <br/>
                best to play genre: {guitar.genre}

                {(onEditGuitar) &&
                    <div className="border-top mt-1 pt-1">
                        <EditOptionsButton onClick={() => onEditGuitar(guitar)}>edit</EditOptionsButton>
                    </div>
                }
            </MyCard>
        </Col>
    );
}

export function Guitars(props) {
    const {guitars, title, onEditGuitar} = props
    return (
        <Section title={title}>
            {guitars?.map(g => <Guitar key={g.kind} guitar={g}
                                       onEditGuitar={onEditGuitar}/>)}
        </Section>
    );
}

