import React from 'react';

import './app.css';

import Header from '../Header';
import Intro from '../Intro';
import Statistic from '../Statistic';
import Services from '../Services';
import Form from '../Form';
import Projects from '../Projects';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Statistic />
      <Services />
      <Form />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
