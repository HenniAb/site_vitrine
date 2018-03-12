import React, {PureComponent} from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';
import { Player, ControlBar, PlayToggle} from 'video-react';

const photos = [
    { src: require('../img/caroussel/1.jpg'), width: 5, height: 3 },
    { src: require('../img/caroussel/2.jpg'), width: 5, height: 3 },
    { src: require('../img/caroussel/7.JPG'), width: 2, height: 3 },
    { src: require('../img/caroussel/3.jpg'), width: 5, height: 3 },
    { src: require('../img/caroussel/4.jpg'), width: 5, height: 3 },
    { src: require('../img/caroussel/5.jpg'), width: 5, height: 3 },
    { src: require('../img/caroussel/6.jpg'), width: 5, height: 3 },
    { src: require('../img/caroussel/8.jpg'), width: 5, height: 3 },
    { src: require('../img/caroussel/9.jpg'), width: 4, height: 5 },
];

const h1Css = {
    marginBottom:"30px",
    marginLeft:"10px",
    letterSpacing: "-0.02em !important",
    color: "white"
};

const h1Css_2 = {
    marginTop:"50px",
    marginBottom:"30px",
    marginLeft:"10px",
    letterSpacing: "-0.02em !important",
    color: "white"
};

export default class media extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = { width: -1, currentImage: 0};
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
        const width = this.state.width;
        return (
            <div>
                <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
                    {
                        ({measureRef}) => {
                            if (width < 1 ){
                                return <div ref={measureRef}/>;
                            }
                            let columns = 1;
                            if (width >= 480){
                                columns = 2;
                            }
                            if (width >= 1024){
                                columns = 3;
                            }
                            if (width >= 1824){
                                columns = 4;
                            }
                            return (
                                <div style={{paddingTop: "80px"}}>
                                    <h1 style={h1Css}>Galerie photos</h1>
                                    <Gallery photos={photos} columns={columns} onClick={this.openLightbox}/>
                                    <Lightbox images={photos}
                                              onClose={this.closeLightbox}
                                              onClickPrev={this.gotoPrevious}
                                              onClickNext={this.gotoNext}
                                              currentImage={this.state.currentImage}
                                              isOpen={this.state.lightboxIsOpen}
                                    />

                                </div>
                            )
                        }
                    }
                </Measure>
                <h1 style={h1Css_2}>Galerie vidéos</h1>
                <Player
                    autoPlay
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                    <ControlBar autoHide={false} disableDefaultControls={true}>
                        <PlayToggle />
                    </ControlBar>
                </Player>
            </div>
        )
    }
}