import React from 'react';
import Feature from '../Feature/Feature';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import Mail from '../Mail/Mail';
import Playlist from '../Playlist/Playlist';
import Header from '../UI/Header';
import Navbar from '../UI/Navbar';
import './Home.css';
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Navbar />
        <Header />
      </div>
      <div className="homeContainer">
        <Feature />

        <h1 className="homeTitle">Browse by property type</h1>
        <Playlist />
        <h1 className="homeTitle">Brows Guest</h1>
        <FeatureProduct />
      </div>
      <div className='other'>
        <Mail />
        <Footer />
      </div>
    </div>
  );
}

export default Home