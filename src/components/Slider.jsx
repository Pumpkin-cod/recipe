import Carousel from 'react-bootstrap/Carousel';
import images from "../assets/cake pops.png"
import { Button } from 'react-bootstrap';

function Slider({ slides }) {
    return (
        <div className=''>
        <Carousel>
            {slides.map((slide) => (
                <Carousel.Item key={slide.id}>
                    <img
                        className="d-block carousel-image"
                        src={slide.image}
                        alt="First slide"
                    />

                </Carousel.Item>
            ))}
        </Carousel>

            <h2>Its a delicious treat.</h2>
            <Button>Request An Order Now</Button>

        </div>
    );
}

export default Slider;