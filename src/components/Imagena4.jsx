import React from "react";
import { useState } from "react";
const Imagena4 = ({ formData }) => {

  const imagenes = [
    {
      title: "Guantes",
      url: "../src/img/CONSTRUCCION1.jpg",
      desc: "Guantes x3",
      positionX: 0,
      positionY: 0
    },
    {
      title: "Casco",
      url: "../src/img/CONSTRUCCION1.jpg",
      desc: "casco negro",
      positionX: 0,
      positionY: 0
    },
    {
      title: "Chaleco",
      url: "../src/img/CONSTRUCCION1.jpg",
      desc: "Chaleco mb",
      positionX: 0,
      positionY: 0
    },
    {
      title: "Botas",
      url: "../src/img/CONSTRUCCION1.jpg",
      desc: "Negro",
      positionX: 0,
      positionY: 0
    },
    {
      title: "Cinta",
      url: "../src/img/CONSTRUCCION1.jpg",
      desc: "Cinta 2xl",
      positionX: 0,
      positionY: 0
    },
  ];

  
  const [posicionX, setPosicionX] = useState(0);
  const [posicionY, setPosicionY] = useState(0);
  const [dataPosition, setdataPosition] = useState([]);

  const handleClick = () => {
    const data = {posicionX, posicionY}; 
    setdataPosition([...dataPosition, data]);
  }



  return (
    <>
      <div className="container column is-centered column is-three-quarters box">
        <div>
          {formData.map((f) => (
            <>
              <p
                className="has-text-centered p-5 has-background-link	has-text-weight-bold has-text-white mb-4"
                key={f.titulo}
              >
                {f.titulo}
              </p>

              {f.imagen && <img 
              src={URL.createObjectURL(f.imagen)}
              onClick={(e) => {
                setPosicionX(e.screenX);
                setPosicionY(e.screenY);
                console.log('Posicion agregada');
                handleClick()
                }}
              />}
            </>
          ))}
        </div>
      </div>

      <>
        <div className="is-flex">
          {imagenes.map((i) => (
            <div className="has-text-centered mb-5">
              <div className=" has-text-centered p-1 has-text-weight-bold ">
                <p key={i.title}>
                  
                {i.title}</p>

                {i.url && <img src={[i.url]} />}

              </div>

              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </> 
    </>
  );
};

export default Imagena4;
