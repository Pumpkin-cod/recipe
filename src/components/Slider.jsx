import Carousel from 'react-bootstrap/Carousel';
import images from "../assets/cake pops.png"

function Slider({ slides }) {
    return (
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
    );
}

export default Slider;