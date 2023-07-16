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


    useEffect(() => {
        getMovies()

    }, [])



    return (
        (
            <MovieList data={data} />
        )
    )


}
export default Home