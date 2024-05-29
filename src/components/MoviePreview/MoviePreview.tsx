import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({movie} : {movie : Movie}) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  var gradeOnFive = movie.vote_average/2;

  

  return <div className={styles.movieCard} onClick={goToMovieDetails}>

    <div>
    <img src={POSTER_URL_PREFIX + movie.poster_path} crossOrigin=""/>
    <p>{movie.title}</p>
    <p>
      {[...Array(5)].map((_, index) => (
        <span className={`${styles.starItem} ${
          index <= gradeOnFive-1 ? styles.green : styles.red
        }`}>★</span>
      ))}
    </p>

  </div>
  </div>;
};

export default MoviePreview;
