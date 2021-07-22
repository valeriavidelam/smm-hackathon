import React from 'react'
import oficinasMap from '../assets/img/Oficinas_Negro-para-map.png';
import ImageMapper from 'react-image-mapper';

const Office = ({onclick}) => {
  const MAP = {
    name: "my-map",
    areas: [
      { 
        name: "G_1",
        shape: "rect",
        coords: [90,53,130,83],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_2",
        shape: "rect",
        coords: [136,53,184,84],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_3",
        shape: "rect",
        coords: [194,37,228,83],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_4",
        shape: "rect",
        coords: [234,35,264,83],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_5",
        shape: "rect",
        coords: [293,48,270,84],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_6",
        shape: "rect",
        coords: [301,48,340,83],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_7",
        shape: "rect",
        coords: [250,94,277,157],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_8",
        shape: "rect",
        coords: [282,94,328,125],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_9",
        shape: "rect",
        coords: [281,130,330,158],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_10",
        shape: "rect",
        coords: [73,171,101,206],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_11",
        shape: "rect",
        coords: [33,168,66,210],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      {
        name: "G_12",
        shape: "rect",
        coords: [38,103,96,162],
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

export default Office