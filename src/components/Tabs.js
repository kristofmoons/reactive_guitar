import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {Section} from "./Section";

function Tab(props) {
    const {tab} = props;
    return (
        <Col>
            <MyCard title={tab.name}>
                {tab.singer}
            </MyCard>
        </Col>
    );
}

export function Tabs(props) {
    const {tabs, title} = props
    return (
        <Section title={title}>
            {tabs.map(t => <Tab key={t.name} tab={t}/>)}
        </Section>
    );
}

