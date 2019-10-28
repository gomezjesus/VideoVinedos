import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import "../assets/styles/App.scss";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import Item from "../components/Item";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initialState";
const Home = () => {
  const initialState = useInitialState(API);
  console.log(initialState);
  return initialState.mylist.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length && (
        <Categories title="Mi Lista">
          <Carrousel>
            {initialState.mylist.map(x => (
              <Item key={x.id} {...x} />
            ))}
          </Carrousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carrousel>
          {initialState.trends.map(x => (
            <Item key={x.id} {...x} />
          ))}
        </Carrousel>
      </Categories>

      <Categories title="Originales de Viñedos">
        <Carrousel>
          {initialState.originals.map(x => (
            <Item key={x.id} {...x} />
          ))}
        </Carrousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default Home;
