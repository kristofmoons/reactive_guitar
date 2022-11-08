import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {Section} from "./Section";

function Guitar(props) {
    const {guitar} = props;
    return (
        <Col>
            <MyCard title={guitar.kind}>
                strings: {guitar.strings}
                <br/>
                best to play genre: {guitar.genre}
            </MyCard>
        </Col>
    );
}

export function Guitars(props) {
    const {guitars, title} = props
    return (
        <Section title={title}>
            {guitars?.map(g => <Guitar key={g.kind} guitar={g}/>)}
        </Section>
    );
}

