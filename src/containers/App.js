import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import "../assets/styles/App.scss";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import Item from "../components/Item";
import Footer from "../components/Footer";
const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories title='Mi Lista'>
      <Carrousel>
        <Item />
        <Item />
        <Item />
      </Carrousel>
    </Categories>

    <Categories title='Favoritos de Viñedos'>
      <Carrousel>
        <Item />
        <Item />
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

export default App;
