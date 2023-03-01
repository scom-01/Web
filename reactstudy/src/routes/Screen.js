import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Screen() {
  const [loading, setLoading] = useState(true);
  const [movie, setmovie] = useState();
  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setmovie(json);
    setLoading(false);
    return;
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>
          <Link to="/">Screen</Link>
        </h1>
      )}
    </div>
  );
}
export default Screen;
