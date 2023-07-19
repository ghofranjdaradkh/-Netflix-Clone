import { useEffect, useState } from "react"
import MovieList from './MovieList'

function Home() {
    const [data, setData] = useState([]);

    async function getMovies() {
        const url = process.env.REACT_APP_URL
        const response = await fetch(`${url}/trending`)
        const moviesTrending = await response.json()
        setData(moviesTrending)
        
    }
    // function to send as props to MovieList then to the modalMovies
    function CommentHandler(NewMovie, id) {
        console.log(NewMovie);
        data.map((element) => {
            console.log(element.id, "element.id")
            if (element.id === id)//this is the Id what I recived from modal
            {
                element.comment = NewMovie.userComment // to edit data in the original object
                console.log(NewMovie);
                return element
            }
            else {
                return element
            }

        }


        )
    }

    useEffect(() => {
        getMovies()


    }, [])



    return (
        (
            <>
                <MovieList CommentHandler={CommentHandler} data={data} />

            </>
        )
    )


}
export default Home