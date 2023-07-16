import Movie from "./Movie"


function MovieList(props) {
    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', rowGap: '20px', marginTop: '15px' }} >
            {props.data.map((obj, i) =>
                <Movie data={obj} key={i} />)}

        </div>

    )
}
export default MovieList