import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative aspect-square md:aspect-[21/9]">
          <Image
            src="/images/amazon-banner-1.jpeg"
            alt="Amazon Banner 1"
            loading="lazy"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square md:aspect-[21/9]">
          <Image
            src="/images/amazon-banner-2.jpg"
            alt="Amazon Banner 2"
            loading="lazy"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square md:aspect-[21/9]">
          <Image
            src="/images/amazon-banner-3.jpg"
            alt="Amazon Banner 3"
            loading="lazy"
            fill
            className="object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
