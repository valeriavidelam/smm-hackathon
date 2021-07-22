import React from 'react'
import oficinasMap from '../assets/img/Oficinas_Negro-para-map.png';
import ImageMapper from 'react-image-mapper';

const Room = ({onclick}) => {
  const MAP = {
    name: "my-map",
    areas: [
      { 
        name: "I",
        shape: "rect",
        coords: [99,131,111,146],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "H",
        shape: "rect",
        coords: [112,130,124,146],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "A",
        shape: "rect",
        coords: [112,96,130,108],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "B",
        shape: "rect",
        coords: [137,96,154,108],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "C",
        shape: "rect",
        coords: [197,108,167,95],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "D",
        shape: "rect",
        coords: [212,96,228,109],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "E",
        shape: "rect",
        coords: [231,96,247,108],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "F",
        shape: "rect",
        coords: [213,147,227,163],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G",
        shape: "rect",
        coords: [177,155,191,172],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      }
      ]
  };
 
  return (
    <div>
      <ImageMapper 
      src={oficinasMap} 
      map={MAP} 
      width={350} 
      imgWidth={350}
      onClick={onclick}
      />
    </div>
  )
}

export default Room