import { Search } from '@material-ui/icons';
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import background from './img/배경화면5.png';

function Home(){
  return ( 
    <div className="Home" >
      <Navbar/>
      <Header />
      {/*<img src={background} alt='배경화면5' />*/}
      <div className="homeSearch">
            <input className="homeSearchInput" type="text" placeholder="Search" />
            <Search className="homeSearchIcon"/>
      </div>
    </div>
  );
}

export default Home;