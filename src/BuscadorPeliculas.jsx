import { useState } from "react"
import { UseFetchBuscador } from "./hook/UseFetchBuscador"
import "./styles/BuscadorPeliculas.css"
export const BuscadorPeliculas = () => {
    const [buscador, setBuscador] = useState('')
   
    const handleChange = (e) => {
        setBuscador(e.target.value)
    }
    const {handleSubmit, pelicula, error } = UseFetchBuscador({buscador, setBuscador})   
    return (
        <div className="container">
            <h1>Buscador de peliculas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={buscador}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                >Buscar</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div className="peliculas">
            
                {pelicula.map((peli) => (
                    <div className="peli" key={peli.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} alt="" />
                        <h2>{peli.title}</h2>
                        <p>{peli.overview}</p>
                    </div>
                ))

                }
            </div>

        </div>
    )
}
