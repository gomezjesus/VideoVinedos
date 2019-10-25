import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import "../assets/styles/App.scss";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import Item from "../components/Item";
import Footer from "../components/Footer";
const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [] });
  useEffect(() => {
    fetch(" http://localhost:3000/initialState")
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);
  console.log(videos.mylist.length);
  console.log(videos.trends);
  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrousel>
            <Item />
          </Carrousel>
        </Categories>
      )}
      <Categories title='Favoritos'>
        <Carrousel>
          {videos.trends.map(x => (
            <Item />
          ))}
        </Carrousel>
      </Categories>

      <Categories title='Volver a ver'>
        <Carrousel>
          <Item />
        </Carrousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
