import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { Button } from "./Button";



export function SideBar() {

  const {genres, selectedGenreId, handleClickButton} = useContext(MovieContext)

  
  
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {console.log('selectedGenreId', selectedGenreId)}
        {genres.map(genre => (
        
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
            />
        ))}
      </div>

    </nav>
  )
}

