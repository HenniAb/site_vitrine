import React, {PureComponent} from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';
import { DefaultPlayer as Video } from 'react-html5video';
import { Container , Row, Col } from 'react-grid-system';

const photos = [
  { src: '../img/caroussel/1.jpg', width: 5, height: 3 },
  { src: '../img/caroussel/2.jpg', width: 5, height: 3 },
  { src: '../img/caroussel/7.JPG', width: 2, height: 3 },
  { src: '../img/caroussel/3.jpg', width: 5, height: 3 },
  { src: '../img/caroussel/4.jpg', width: 5, height: 3 },
  { src: '../img/caroussel/5.jpg', width: 5, height: 3 },
  { src: '../img/caroussel/6.jpg', width: 5, height: 3 },
  { src: '../img/caroussel/8.jpg', width: 5, height: 3 },
  { src: '../img/caroussel/9.jpg', width: 4, height: 5 },
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
    this.state = { width: -1, currentImage: 0, isToggleOn: true};
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    this.handleClick = this.handleClick.bind(this);
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
  handleClick() {
    console.log("This is a test");
    this.setState({
      isToggleOn: false,
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
                  <h1 style={h1Css}>Photos</h1>
                  <Container>
                    <Row>
                      <Col widths={{lg:12, xl:12}} offset={{sm: 0, xs: 0, md: 0, xl: 0, lg: 0}}>
                        <Gallery photos={photos} columns={columns} onClick={this.openLightbox}/>
                      </Col>
                    </Row>
                  </Container>
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
        <h1 style={h1Css_2}>Vidéo</h1>
        <Container style={{marginBottom: "100px"}}>
          <Row>
            <Col >
              <Video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                     poster={"/img/posterVideo.jpg"}>
                <source src={"/video/firstVideo.mp4"} type="video/mp4" />
              </Video>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
