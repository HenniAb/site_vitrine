import React, { PureComponent } from 'react';

class Gmap extends PureComponent {
  constructor(){
    let uluru = {lat: -25.363, lng: 131.044};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  render() {
    return (

    );
  }
}

export default Gmap;