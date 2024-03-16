import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";

export default function Carousel({ movies }) {
  const settings = {
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true, // Включає автоперелистування
    autoplaySpeed: 2000, // Задає швидкість автоперелистування (500 мс)
  };

  return (
    <div style={{width:"500px"}}>
        <Slider {...settings}>
      {movies.map((movie) => {
        return <CarouselItem key={movie.id} movie={movie}/>;
      })}
    </Slider>
    </div>
  );
}
