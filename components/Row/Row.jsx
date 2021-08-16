import { useState, useEffect } from 'react';
import axios from '../../pages/axios';

const poster_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // run this code when the ROW loads
    useEffect(() => {
        // if [], run once when the row loads, and don't run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log('****request****');
            console.log(request.data.results);
            setMovies(request.data.results);

            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            {/* title  */}
            <h2>{title}</h2>
            {/* container  */}
            <div className="row__posters">
                {/* sevral row_poster(s) */}
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__poster-large"}`}
                        src={`${poster_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row