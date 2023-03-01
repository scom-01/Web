import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Screen() {
  const { id } = useParams();
  console.log(id);
  return (
    <h1>
      <Link to="/">Screen</Link>{" "}
    </h1>
  );
}
export default Screen;
