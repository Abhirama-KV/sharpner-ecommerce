import { useEffect,useState } from "react";

const Home = () => {
    const [movies,setMovies] = useState('');

    // useEffect(()=>{
    //     fetchMovies();
    // },[])

    // const fetchMovies = async ()=>{
    //     const data = await fetch("https://swapi.dve/api/films")
    //     const json = await data.json();
    //     console.log(json)
    // }

    return (
        <div>
            <h1>Home</h1>

        </div>

    )
}

export default Home;