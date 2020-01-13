import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Alexandre Viretti',
      headersLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/' },
        { title: 'Contact', path: '/' }
      ],
      home: {
        title: 'Mon portfolio...',
        subTitle: 'Overview of my projects',
        text: 'Checkout my projects below',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Talk',
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="" bg="transparent" expand="lg" sticky="top">
            <Navbar.Brand><h3 className="display-5 font-weight-light">Alexandre Viretti</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />
          <Footer className="footer1" />
        </Container>
      </Router>
    );
  }
}

export default App;
