import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
// import building from "../assets/images/building.jpeg";
// import cycle from "../assets/images/cycle.jpg";
// import shop from "../assets/images/shop.png";
// import m1 from "../assets/images/m1.jpeg";

export default function Banner() {
  let slides = {
    image: [
      "https://dummyimage.com/2160x1080/143096/f7f7f7.png&text=%20%20+KEEP+WALKING+INTO+RIGHT+DIRECTION",
      "https://dummyimage.com/2160x1080/245076/f7f7f7.png&text=%20%20+THE+GREATEST+SUMMER+MIX",
      "https://dummyimage.com/2160x1080/341056/f7f7f7.png&text=%20%20+NO.+1+IN+ECOMMERCE",
    ],
    text: [
      "KEEP WALKING INTO RIGHT DIRECTION",
      "THE GREATEST SUMMER MIX",
      "NO. 1 IN ECOMMERCE",
    ],
    link: ["", "", ""],
  };

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.image.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.image.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="w-[100%] m-auto pt-0">
      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-in-out duration-400`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.image.map((s) => {
            return <img key={s.text} src={s} />;
          })}
          
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
}
