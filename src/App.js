import React from 'react';
import {createGlobalStyle } from 'styled-components';
import Navbar from './Navbar/Navbar';
import {Title} from './Styles/title'; 
import {Banner} from './Banner/banner';

const GlobalStyle = createGlobalStyle`

body {
  margin: 0p;
  font-family: 'Open Sans', sans-serif;

}
h1, h2, h3 {
  font-family: 'Righteous', cursive;

}

`


function App() {
  return (
    
    <>
      <GlobalStyle/>
      <Navbar/>
      <Banner/>
      <div>Welcopme</div>
      
    </>
    
  );
}

export default App;
