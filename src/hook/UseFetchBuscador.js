import { useState } from "react"

export const UseFetchBuscador = ({buscador, setBuscador}) => {
    const API_KEY = "4ccf9c7327434e0991e75ea9630f31d5"
    const urlBase = 'https://api.themoviedb.org/3/search/movie'

    const [pelicula, setPelicula] = useState([])
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setBuscador("")
        
        if (buscador.length > 0) {
            setPelicula([])
            fetchPelicula()
        } else {
            setError("Ingrese una pelicula")
        }
    }

    const fetchPelicula = async () => {
        setError(null)
        try {
            const response = await fetch(`${urlBase}?query=${buscador}&api_key=${API_KEY}`)
            const data = await response.json()
            if (response.ok) {
                if (data.results.length > 0) {
                    setPelicula(data.results)
                } else {
                    setError("la pelicula no existe")
                }
            } else {
                setError("Error en la busqueda, intente nuevamente")
            }
        } catch (error) {
            setError("Ocurrio un problema")
        }
    }
        return {
            pelicula,
            handleSubmit,
            error
        }


    }

