import Carousel from 'react-bootstrap/Carousel';

function LandingCar() {
    return (
        <Carousel>
            <Carousel.Item>
                <img style={{maxHeight:"80vh"}} src={`images/landing1.png`}
                    className="d-block min-vw-100"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>text</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img style={{maxHeight:"80vh"}} src={`images/landing2.png`}
                     className="d-block min-vw-100"
                     alt="First slide"
                />
                <Carousel.Caption>
                    <h3>text</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}




export function Landing() {
    return (
       <LandingCar/>
    );
}