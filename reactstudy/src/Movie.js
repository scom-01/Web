import PropTypes from "prop-types";

function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{coverImg !== "" ? <img src={coverImg} alt="profile" /> : null}</p>

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
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
