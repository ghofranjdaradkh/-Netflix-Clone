import Movie from "./Movie"


function MovieList(props) {
    return (

        <div className="list"  >
            
             
            {props.data.map((obj, i) =>
        <Movie data={obj} key={i}  CommentHandler={props.CommentHandler}/>)}

        </div>

    )
}
export default MovieList