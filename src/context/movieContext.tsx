import { useState } from 'react';
import { useEffect } from 'react';
import {createContext} from 'react'
import { api } from '../services/api';

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
  
  interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }

export const  MovieContext = createContext({})


export function MovieContextProvider({children}){
    const [selectedGenreId, setSelectedGenreId] = useState(1);
    const [genres, setGenres] = useState<GenreResponseProps[]>([]);
    
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    useEffect(() => {
      api.get<GenreResponseProps[]>('genres').then(response => {
        setGenres(response.data);
      });
    }, []);
  
    useEffect(() => {
      api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
        setMovies(response.data);
        
      });
  
      api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
        setSelectedGenre(response.data);
      })
    }, [selectedGenreId]);

    function handleClickButton(id: number) {
      setSelectedGenreId(id);
    }

   return(
    <MovieContext.Provider value={{genres, movies, selectedGenreId, selectedGenre, handleClickButton}}>
    {children}
    </MovieContext.Provider>
   )
}



  

  
//     api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
//       setMovies(response.data);
//     });

//     api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
//       setSelectedGenre(response.data);
//     })
//   }, [selectedGenreId]);

  
