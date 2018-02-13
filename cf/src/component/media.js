import React, { PureComponent } from "react";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { Container , Row, Col } from 'react-grid-system';


const photos = [
    { src: require('../img/caroussel/1.jpg'), width: 4, height: 3 },
    { src: require('../img/caroussel/2.jpg'), width: 1, height: 1 },
    { src: require('../img/caroussel/3.jpg'), width: 3, height: 4 },
    { src: require('../img/caroussel/4.jpg'), width: 3, height: 4 },
    { src: require('../img/caroussel/5.jpg'), width: 3, height: 4 },
    { src: require('../img/caroussel/6.jpg'), width: 4, height: 3 },
];

const h1Css = {
    fontSize: "3em",
    color: "white",
    marginBottom:"30px",
    letterSpacing: "-0.02em !important"
};

export default class App extends PureComponent {
    constructor() {
        super();
        this.lightboxIsOpen = false;
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        return (

            <Container>
                <Row style={{paddingTop: "100px"}}>
                    <Col><h1 style={h1Css}>Gallerie photos</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Gallery photos={photos} onClick={this.openLightbox} />
                        <Lightbox images={photos}
                                  onClose={this.closeLightbox}
                                  onClickPrev={this.gotoPrevious}
                                  onClickNext={this.gotoNext}
                                  currentImage={this.state.currentImage}
                                  isOpen={this.state.lightboxIsOpen}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}