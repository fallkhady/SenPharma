import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css"

export default class Resizable extends Component {
    state = {
        display: true,
        width: 800
    };
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className="slide">

                <div className="slider"
                    style={{
                        width: this.state.width + "px",
                        display: this.state.display ? "block" : "none"
                    }}
                >
                    <Slider {...settings}>
                        <div className="s">
                            <h3>1</h3>
                        </div>
                        <div className="s">
                            <h3>2</h3>
                        </div>
                        <div className="s">
                            <h3>3</h3>
                        </div>
                        <div className="s" >
                            <h3>4</h3>
                        </div>
                        <div className="s">
                            <h3>5</h3>
                        </div>
                        <div className="s">
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}
