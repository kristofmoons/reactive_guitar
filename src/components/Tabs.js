import {Col, Modal} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {Section} from "./Section";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Tab(props) {
    const {tab} = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col>
            <Button variant="dark" onClick={handleShow}>
                view tabs
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{tab.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AudioPlayer
                        autoPlay
                        src='music/test.mp3'
                        onPlay={e => console.log("onPlay")}
                        // other props here
                    />
                    <img  src={`images/${tab.imgPath}`} alt="leTabs" width="450" height="600"/>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <MyCard title={tab.name} imgPath={tab.imgPath}>
                {tab.singer}


            </MyCard>
        </Col>
    );
}

export function Tabs(props) {
    const {tabs, title} = props
    return (
        <Section title={title}>
            {tabs?.map(t => <Tab key={t.name} tab={t}/>)}
        </Section>
    );
}

