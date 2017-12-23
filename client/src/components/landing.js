import React from 'react';
import Header from './header';
import Navigation from './navigation';
import About from './about';
import Services from './services';
import Contact from './contact'

export default class Landing extends React.Component {
  render() {
   return ( <main>
      <Header />
      <Navigation />
      <About />
      <Services />
      <Contact />
    </main>
   )
  }
}