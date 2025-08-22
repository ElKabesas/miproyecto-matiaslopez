import React from "react";
import Slider from "react-slick";
import productosData from "../data/productos.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrusel = () => {
  const settings = {
    dots: true,            // puntitos de navegación
    infinite: true,        // bucle infinito
    speed: 500,            // velocidad transición
    slidesToShow: 1,       // una imagen por vez
    slidesToScroll: 1,
    autoplay: true,        // que pase solo
    autoplaySpeed: 3000,   // cada 3 segundos
  };

  return (
    <Slider {...settings}>
      {productosData.map((producto) => (
        <div key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
      ))}
    </Slider>
  );
};

export default Carrusel;