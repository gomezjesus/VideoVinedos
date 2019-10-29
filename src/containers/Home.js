import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import "../assets/styles/App.scss";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import Item from "../components/Item";
import useInitialState from "../hooks/useInitialState";

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Search />
      {mylist.length && (
        <Categories title='Mi Lista'>
          <Carrousel>
            {mylist.map(x => (
              <Item key={x.id} {...x} />
            ))}
          </Carrousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carrousel>
          {trends.map(x => (
            <Item key={x.id} {...x} />
          ))}
        </Carrousel>
      </Categories>

      <Categories title='Originales de Viñedos'>
        <Carrousel>
          {originals.map(x => (
            <Item key={x.id} {...x} />
          ))}
        </Carrousel>
      </Categories>
    </>
  );
};

//export default Home;

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
