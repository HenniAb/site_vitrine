import React, { PureComponent } from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';
import { DefaultPlayer as Video } from 'react-html5video';
import { Container, Row, Col } from 'react-grid-system';
import '../../styles/css/react-html5video.css';

import pic1 from '../../assets/images/caroussel/1.jpg';
import pic2 from '../../assets/images/caroussel/2.jpg';
import pic3 from '../../assets/images/caroussel/3.jpg';
import pic4 from '../../assets/images/caroussel/4.jpg';
import pic5 from '../../assets/images/caroussel/5.jpg';
import pic6 from '../../assets/images/caroussel/6.jpg';
import pic7 from '../../assets/images/caroussel/7.JPG';
import pic8 from '../../assets/images/caroussel/8.jpg';
import pic9 from '../../assets/images/caroussel/9.jpg';
import presVideo from '../../assets/video/firstVideo.mp4';

const photos = [
  { src: pic1, width: 5, height: 3 },
  { src: pic2, width: 5, height: 3 },
  { src: pic3, width: 2, height: 3 },
  { src: pic4, width: 5, height: 3 },
  { src: pic5, width: 5, height: 3 },
  { src: pic6, width: 5, height: 3 },
  { src: pic7, width: 5, height: 3 },
  { src: pic8, width: 5, height: 3 },
  { src: pic9, width: 4, height: 5 }
];

const h1Css = {
  marginBottom: '30px',
  marginLeft: '10px',
  letterSpacing: '-0.02em !important',
  color: 'white'
};

const h2Css1 = {
  marginTop: '50px',
  marginBottom: '30px',
  marginLeft: '10px',
  letterSpacing: '-0.02em !important',
  color: 'white'
};

export default class media extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = { width: -1, currentImage: 0, isToggleOn: true };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  handleClick() {
    this.setState({
      isToggleOn: false
    });
  }

  render() {
    const width = this.state.width;
    return (
      <div>
        <Measure bounds onResize={ contentRect => this.setState({ width: contentRect.bounds.width }) }>
          {
            ({ measureRef }) => {
              if (width < 1) {
                return <div ref={ measureRef } />;
              }
              let columns = 1;
              if (width >= 480) {
                columns = 2;
              }
              if (width >= 1024) {
                columns = 3;
              }
              if (width >= 1824) {
                columns = 4;
              }
              return (
                <div style={ { paddingTop: '80px' } }>
                  <h1 style={ h1Css }>Photos</h1>
                  <Container>
                    <Row>
                      <Col>
                        <Gallery photos={ photos } columns={ columns } onClick={ this.openLightbox } />
                      </Col>
                    </Row>
                  </Container>
                  <Lightbox
                    images={ photos }
                    onClose={ this.closeLightbox }
                    onClickPrev={ this.gotoPrevious }
                    onClickNext={ this.gotoNext }
                    currentImage={ this.state.currentImage }
                    isOpen={ this.state.lightboxIsOpen }
                  />

                </div>
              );
            }
          }
        </Measure>
        <h1 style={ h2Css1 }>Vidéo</h1>
        <Container style={ { marginBottom: '100px' } }>
          <Row>
            <Col>
              <Video
                controls={ ['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen'] }
                poster={ '/img/posterVideo.jpg' }
              >
                <source src={ presVideo } type="video/mp4" />
              </Video>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
