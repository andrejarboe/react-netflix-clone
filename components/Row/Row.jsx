import { useState, useEffect } from 'react';
import axios from '../Hooks/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const poster_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow, videoKey }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('')

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

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log('movie name: ' + movie.id);
        // if (trailerUrl) {-
        //     setTrailerUrl('');
        // } else {

        //     movieTrailer(movie?.name || '')
        //         .then(url => {
        //             const urlParams = new URLSearchParams(new URL(url).search);
        //             setTrailerUrl(urlParams.get('v'));
        //             // console.log('search p: ' + urlParams.get('v'));

        //         })
        //         .catch((error) => console.log(error));
        // }

        const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=8d976d47d1b80d5a77b6ec844f4b541f`
    }


    // console.log(movies);

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
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
            <div className="video">{videoKey}</div>
        </div>
    )
}

export default Row;

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=8d976d47d1b80d5a77b6ec844f4b541f`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          videoKey: data
      }, // will be passed to the page component as props
    }
  }