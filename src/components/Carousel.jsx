import React from 'react';
import porjectflat from '../assets/images/projectflat.png'
import quiabete from '../assets/images/quiabete.png'
import vanneur from '../assets/images/vanneur.png'
import Card from '../components/Card';
import { Container, Row } from 'react-bootstrap';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Météo api',
          subTitle: 'App in react Rails météo',
          imgSrc: porjectflat,
          link: 'https://radiant-falls-29618.herokuapp.com/',
          selected: false
        },
        {
          id: 1,
          title: 'Quia bete',
          subTitle: 'Site de paris entre pote',
          imgSrc: quiabete,
          link: 'https://www.quiabete.co',
          selected: false
        },
        {
          id: 2,
          title: 'Le vanneur',
          subTitle: 'An airBnB of Vans',
          imgSrc: vanneur,
          link: 'http://vanneur.herokuapp.com/',
          selected: false
        },
      ]
    }
  }

  handleCardClick = (id, card) => {

    let items = this.state.items;


    items[id].selected = items[id].selected ? false : true;
    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }


  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }


  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}







export default Carousel;
