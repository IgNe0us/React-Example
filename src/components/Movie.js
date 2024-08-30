import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return (
        <div>
            <hr/>
            <img alt={"movie_image"} src={coverImg}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <ul>
                <li>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>)
                    )}
                </li>
            </ul>
            <p>{summary}</p>
            <hr/>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;