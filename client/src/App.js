import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import './Styles/Reset.css';
import './Styles/App.css';

const App = () => (
  <BrowserRouter>
      <Navigation />
  </BrowserRouter>
)

export default App;