import css from "./MovieCastActor"

export default function MovieCastActor ({actor}) {
    const baseUrl = "https://image.tmdb.org/t/p/w500";
    const defaultPhoto = "https://www.shutterstock.com/shutterstock/photos/270387437/display_1500/stock-photo-anonymous-portrait-silhouette-of-man-unidentifiable-270387437.jpg";
  return (
    <div>
        <h4>{actor.name}</h4>
        {actor.profile_path ? (<img src={`${baseUrl}${actor.profile_path}`} alt={`${actor.name} photo`} className={css.img}/>) : <img src={`${defaultPhoto}`} />}
    </div>
  )
}
