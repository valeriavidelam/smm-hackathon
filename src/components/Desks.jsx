import React from 'react';
import ImageMapper from 'react-image-mapper';
import G_5 from '../assets/img/g5.PNG'



const Desks = ({onclick}) => {
  const DESKMAP = {
    name: "G_5",
    areas: [
      { 
        name: "E1",
        shape: "circle",
        coords: [43,74,24],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E2",
        shape: "circle",
        coords: [43,179,23],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E3",
        shape: "circle",
        coords: [46,288,23],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E4",
        shape: "circle",
        coords: [113,125,23],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E5",
        shape: "circle",
        coords: [115,235,24],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E6",
        shape: "circle",
        coords: [118,339,22],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E7",
        shape: "circle",
        coords: [192,74,23],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E8",
        shape: "circle",
        coords: [193,182,22],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E9",
        shape: "circle",
        coords: [193,288,24],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E10",
        shape: "circle",
        coords: [256,128,24],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E11",
        shape: "circle",
        coords: [255,233,25],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      },
      { 
        name: "E12",
        shape: "circle",
        coords: [259,341,25],
        preFillColor: "#A1C60E",
        fillColor: "#6885BF"
      }
    ]
  };
  return (
    <div>
      <ImageMapper 
      src={G_5} 
      map={DESKMAP} 
      width={300} 
      imgWidth={300}
      onClick={onclick}
      />
    </div>
  )
}

export default Desks