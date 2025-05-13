import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import BreakingNews from './components/BreakingNews';
import NewsItem from './components/NewsItem';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BreakingNews />

        <NewsItem />
        <Footer/>

        {/* <Router>
          <Routes>
            <Route path="*" element={<ErrorPage />} />

          </Routes>
        </Router> */}
      </div>
    )
  }
}

