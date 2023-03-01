import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, id, coverImg, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {coverImg !== "" ? (
          <Link to={`/movie/${id}`}>
            <img src={coverImg} alt="profile" />
          </Link>
        ) : null}
      </p>

      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
