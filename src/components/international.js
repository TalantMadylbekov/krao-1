import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import slide from "../img/slide1"
import slide2 from "../img/slide2"
import slide3 from "../img/slide3"
import About from "./about";

const International = () => {
    return (
        <div>
            <About />
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={3}
                interval={3000}
                isPlaying={true}
            >
                <Slider>
                    <Slide index={0}><img src={slide}  width="100%" alt=""/></Slide>
                    <Slide index={1}><img src={slide2} width="100%" alt=""/></Slide>
                    <Slide index={2}><img src={slide3} width="100%" alt=""/></Slide>
                </Slider>
                <ButtonNext />
            </CarouselProvider>
        </div>
    );
};

export default International;