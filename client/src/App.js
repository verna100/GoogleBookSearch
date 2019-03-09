import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Jumbotron from "./components/Jumbotron.js";
import BookCard from "./components/BookCard.js";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Jumbotron />
      <BookCard />
      <br />
      <BookCard />
      <br />
      <BookCard />
      <br />
      <BookCard />
  

      </div>
    );
  }
}

export default App;
