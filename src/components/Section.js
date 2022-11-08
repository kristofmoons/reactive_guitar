import {Container, Row} from "react-bootstrap";

export function Section(props){
    const {title, children} = props;
    return(

        <div className="shadow-sm sectionMargin" style={{backgroundColor: "rgba(27,27,27,0.8)"}}>
            <h2 className={"text-center"} style={{paddingTop: "2vh",paddingBottom: "2vh",color:"#fddb3a"}}>{title}</h2>

            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
    );
}