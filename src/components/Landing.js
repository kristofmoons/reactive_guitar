import {Col, Row} from "react-bootstrap";

export function Landing() {
    return (
        <section>
            <Row d-sm-flex align-items-center justify-content-between w-100 style={{height: "65vh"}}>
                <Col col-md-4 mx-auto mb-4 mb-sm-0  style={{left: "130px"}}>
                    <p className={"text-secondary text-uppercase"}>Welcome to</p>
                    <h1 className={"display-4 my-4 font-weight-bold"}>Reactive <span style={{color:"#fddb3a"}}>Guitar</span>
                    </h1>
                    <button className={"btn px-5 py-3 text-white mt-3 mt-sm-0"}
                       style={{borderRadius: "30px", backgroundColor: "#fddb3a"}}>let's Get Started</button>
                </Col>
                <Col col-md-8 h-100
                     style={{clipPath:"polygon(50% 0, 100% 0, 100% 100%, 0% 100%)",minHeight: "350px", backgroundImage: "url(images/landing2.png)",
                         backgroundPosition: "center", backgroundSize: "cover"}}>

                </Col>
            </Row>


        </section>
    );
}




