import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/images/slider/slide1.jpg";
import image2 from "../../assets/images/slider/slide2.jpg";
import image3 from "../../assets/images/slider/slide3.jpg";

const CarouselSection = () => {
  return (
    <section style={{ height: "calc(100vh - 77px)" }}>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={true}
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
      >
        <div>
          <img src={image1} />
          <p className="hi">Legend 1</p>
        </div>
        <div>
          <img src={image2} />
          <p className="hi">Legend 2</p>
        </div>
        <div>
          <img src={image3} />
          <p className="hi">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselSection;
