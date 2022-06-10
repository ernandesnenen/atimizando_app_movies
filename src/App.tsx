import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { MovieContext, MovieContextProvider } from './context/movieContext';
import { useContext } from 'react';



export function App() {

 
  
  return (
    <MovieContextProvider>
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar />
      <Content
        // selectedGenre={selectedGenre}
        // movies={movies}
        /> 
    </div>
    </MovieContextProvider>
  )
}