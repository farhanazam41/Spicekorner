import React from 'react';
import {GlobalStyle} from  './Styles/GlobalStyle';
import Navbar from './Navbar/Navbar';
import {FoodDialog} from './FoodDialog/FoodDialog';
import {Banner} from './Banner/banner';
import {Menu} from './Menu/Menu';





function App() {

  const [openFood, setOpenFood] = React.useState();
  return (
    
    <>
      <GlobalStyle/>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar/>
      <Banner/>
      <Menu setOpenFood={setOpenFood} />
    </>
    
  );
}

export default App;
