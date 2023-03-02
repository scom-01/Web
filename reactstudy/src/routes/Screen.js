import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Movie from "../components/Movie";
import styles from "./Home.module.css";
function Screen() {
  const [loading, setLoading] = useState(true);
  const [movie, setmovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setmovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  const useInput = (initValue, vailddator) => {
    const [value, setValue] = useState(initValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof vailddator === "function") {
        willUpdate = vailddator(value);
      }

      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          <h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Screen</Link>
          </h1>
          <input placeholder="Name" {...name} />
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            coverImg={movie.medium_cover_image}
            summary={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Screen;
