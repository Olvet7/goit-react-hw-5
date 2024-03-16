export default function CarouselItem ({movie}) {
    const baseUrl = "https://image.tmdb.org/t/p/w500";
     return (
    <div>
        <img src={`${baseUrl}${movie.poster_path}`} />
    </div>
  )
}
