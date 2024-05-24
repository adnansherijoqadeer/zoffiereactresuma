import Slider from "react-slick";
import "../App.css";
import styled from "@emotion/styled";
const WrapperDiv =styled.h3`
  padding-top: 38px;
  @media (min-width: 640px) {
    padding-top: 84px;
    padding-bottom: 44px;
  }

`
const ImageSlider = ({ images }) => {
  
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: false,
    speed: 100,
    centerPadding: '350px 120px',
    infinite: true,
    autoplaySpeed: 980,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          centerPadding: '200px 0px',
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          centerPadding: '50px 0px',
        }
      }
    ]
  };

  return (
    <WrapperDiv>
    <div className="center-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt="alt" />
          </div>
        ))}
      </Slider>
    </div>
  </WrapperDiv>
  );
};

export default ImageSlider;
